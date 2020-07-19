import React, { useState } from 'react'
import Modal from 'react-modal'
import PieRechartComponent from "./PieRechartComponent";

export default function TpModal({ all }) {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  let map = new Map()

  if (all) {
    all.map(player => {
      if (map.has(player.team_acronym)) {
        map.set(player.team_acronym, map.get(player.team_acronym) + 1);
      } else {
        map.set(player.team_acronym, 1)
      }
    })
  }

  let count = 1;
  for (let value of map.values()) {
    if (value <= 15)
      count++;
  }

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Show charts</button>
      <div className="modal-container">
        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} contentLabel="Modal" >
          <h2>How many teams players amount is less than 15?</h2>
          <p>Pie Chart</p>
          <PieRechartComponent less15={count} teams={map.size} />
          <div>
            <button onClick={() => setModalIsOpen(false)}>Close</button>
          </div>
        </Modal>
      </div>

    </div>
  )
}
