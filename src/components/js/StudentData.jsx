"use client"
import "../css/StudentData.css"

const StudentData = ({ data, onBack }) => {
  return (
    <div className="student-data-container">
      <div className="header">
        <img src="/images/Logo_uscs.png" alt="USCS Logo" className="main-logo" />
      </div>

      <div className="document-container">
        <div className="document-header">
          <h2>USCS</h2>
          <p>Portaria CEE/GP/SP 205 de 21/06/2018</p>
          <p>Avenida Goiás, 3400 São Caetano do Sul - SP CEP 09550051</p>
          <p>Fone (11)4239-3200</p>
          <p>CNPJ: 44.392.215/0001-70</p>
        </div>

        <div className="document-content">
          <p className="certification-text">
            A Secretaria Técnica da Universidade Municipal de São Caetano do Sul, Estado de São Paulo, devidamente
            autorizada pelo Magnífico Reitor e nos Termos do Regimento Interno, <strong>CERTIFICA</strong>, para os
            devidos fins que,
          </p>

          <div className="student-info">
            <p>
              <strong>{data.name}</strong>, portador da Cédula de identidade RG sob o nº <strong>{data.rg}</strong> e do
              CPF/MF sob o nº <strong> {data.cpf}</strong> é aluno(a) regularmente matriculado(a) no{" "}
              <strong>{data.semester}</strong> cursando o grupo 2 no curso de graduação em{" "}
              <strong>{data.course}</strong> no período <strong>{data.period}</strong>.
            </p>

            <p>
              O(A) referido(a) aluno(a) deverá cumprir o seguinte horário de aula: de <strong>{data.schedule}</strong>{" "}
              com início do semestre letivo em <strong>{data.startDate}</strong> e término previsto para{" "}
              <strong>{data.endDate}</strong> conforme calendário acadêmico.
            </p>

            <p>
              Informamos que os sábados são considerados dias letivos, podendo ser programada quaisquer atividades
              acadêmicas no período diurno.
            </p>

            <p>Sendo o que se apresenta para o momento, subscrevemo-nos.</p>
            <p>Atenciosamente.</p>
            <p>
              <strong>SECRETARIA TÉCNICA</strong>
            </p>
            <p>São Caetano do Sul, 04 de outubro de 2025.</p>
          </div>

          <div className="authenticity-code">
            <p>
              Esse documento possui código de autenticidade <strong>DC0B4-37F51-5645C-6BFD5-2B09C</strong> válido até{" "}
              <strong>{data.validUntil}</strong>
            </p>
          </div>
        </div>

        <button onClick={onBack} className="back-button">
          Voltar à Verificação
        </button>
      </div>

      <div className="footer">
        <p>Avenida Goiás, 3400 - CEP: 09550051 - São Caetano do Sul - SP - Fone: (11)4239-3200</p>
      </div>
    </div>
  )
}

export default StudentData
