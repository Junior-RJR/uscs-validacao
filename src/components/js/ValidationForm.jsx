"use client"

import { useState } from "react"
import "../css/ValidationForm.css"
// import logo from '../assets/images/logo.png';

const ValidationForm = ({ onValidate }) => {
  const [codes, setCodes] = useState(["", "", "", "", ""])
  const [isChecked, setIsChecked] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleCodeChange = (index, value) => {
    // Apenas letras maiúsculas e números, máximo 5 caracteres
    const formattedValue = value
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, "")
      .slice(0, 5)
    const newCodes = [...codes]
    newCodes[index] = formattedValue
    setCodes(newCodes)

    // Auto-focus no próximo campo se completou 5 caracteres
    if (formattedValue.length === 5 && index < 4) {
      const nextInput = document.getElementById(`code-${index + 1}`)
      if (nextInput) nextInput.focus()
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!isChecked) {
      alert("Por favor, confirme que você não é um robô.")
      return
    }

    const fullCode = codes.join("-")

    if (codes.some((code) => code.length !== 5)) {
      alert("Por favor, preencha todos os códigos com 5 caracteres cada.")
      return
    }

    setIsLoading(true)

    // Simula carregamento de 4 segundos
    setTimeout(() => {
      setIsLoading(false)
      onValidate(fullCode)
    }, 4000)
  }

  return (
    <div className="validation-container">
      <div className="header">
        {/* <img src={logo} alt="USCS Logo" className="main-logo" /> */}
        <img src="/images/Logo_uscs.png" alt="USCS Logo" className="main-logo" />

    </div>

      <div className="main-content">
        <h2 className="page-title">AUTENTICIDADE DE DOCUMENTOS</h2>

        <div className="form-container">
          <p className="instruction">Por favor, informe os campos abaixo para verificar se o documento é válido.</p>

          <form onSubmit={handleSubmit}>
            <div className="code-inputs">
              {codes.map((code, index) => (
                <input
                  key={index}
                  id={`code-${index}`}
                  type="text"
                  value={code}
                  onChange={(e) => handleCodeChange(index, e.target.value)}
                  className="code-input"
                  maxLength={5}
                />
              ))}
            </div>

            <div className="recaptcha-container">
              <div className="recaptcha-mock">
                <input
                  type="checkbox"
                  id="recaptcha"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                <label htmlFor="recaptcha">Não sou um robô</label>
                <div className="recaptcha-logo">
                  <div className="recaptcha-text">reCAPTCHA</div>
                  <div className="recaptcha-privacy">Privacidade - Termos</div>
                </div>
              </div>
            </div>

            <button type="submit" className="visualizar-button" disabled={isLoading}>
              {isLoading ? (
                <div className="loading-container">
                  <div className="spinner"></div>
                  Carregando...
                </div>
              ) : (
                "Visualizar"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ValidationForm
