"use client"

import { useState } from "react"
import ValidationForm from "./components/js/ValidationForm"
import StudentData from "./components/js/StudentData"
import "./components/css/App.css"

function App() {
  const [isValidated, setIsValidated] = useState(false)
  const [studentData, setStudentData] = useState(null)

  const handleValidation = (code) => {
    // Simula validação - no caso real seria uma API
    if (code === "DC0B4-37F51-5645C-6BFD5-2B09C") {
      setStudentData({
        name: "Sara Vieira da Silva",
        rg: "504849438",
        cpf: "53425520873",
        semester: "2º semestre de 2025",
        course: "Superior de Tecnologia em Marketing",
        period: "noturno",
        schedule: "segunda-feira a sexta-feira das 19:20 às 22:50",
        startDate: "01/02/2025",
        endDate: "31/12/2025",
        validUntil: "31/12/2025",
      })
      setIsValidated(true)
    } else {
      alert("Código de autenticidade inválido!")
    }
  }

  const handleBack = () => {
    setIsValidated(false)
    setStudentData(null)
  }

  return (
    <div className="App">
      {!isValidated ? (
        <ValidationForm onValidate={handleValidation} />
      ) : (
        <StudentData data={studentData} onBack={handleBack} />
      )}
    </div>
  )
}

export default App
