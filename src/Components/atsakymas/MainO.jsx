
import axios from "axios";
import { useEffect, useState } from "react";
import List from "./List";
import Modal from "./Modal";


function MainA() {
  const [table, setTable] = useState([]);
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [showModal, setShowModal] = useState(false);
  const [modalInputs, setModalInputs] = useState({
    id: "",
    name: "",
    tittle: "",
    class: "",
  });
//Read React
  useEffect(() => {
    axios
      .get("http://localhost:3003/atsakymas")
      .then((res) => {
        setTable(res.data);
      })
      .catch((err) => console.log(err));
  }, [lastUpdate]);
//Update React
  const edit = (item, id) => {
    setShowModal(false);
    axios.put('http://localhost:3003/atsakymas/' + id, item)
    .then(res => {
        setLastUpdate(Date.now());
    })
    .catch((err)=> console.log(err));
}

//Delete React
const remove = (item) => {
 axios.delete('http://localhost:3003/atsakymas/' + item.id)
            .then(res => {
                setLastUpdate(Date.now());
            })
.catch((err)=> console.log(err));
}
  const modal = (item) => {
    setShowModal(true);
    setModalInputs(item);
  };

  const hide = () => {
    setShowModal(false);
  };
  
  return (
    <div className="App">
     
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">Klausymai ir atsakymai</div>
              <div className="card-body">
                <table className="table">
                  <tbody>
                  <tr>
                    <th>Pavadinimas</th>
                    <th>Aprašymas</th>
                    <th>Klasė</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                  <List table={table} modal={modal} remove={remove}/>
                  </tbody>
                </table>
                <Modal
                    showModal={showModal}
                    modalInputs={modalInputs}
                    hide={hide}
                    edit={edit}
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainA;
