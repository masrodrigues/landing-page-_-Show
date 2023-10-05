import React from 'react'

function Ticket() {
  return (
    <div className="mx-auto max-w-screen-lg">
      <h2 class="mt-20">Tickets</h2>

      <table className="mt-5 table w-full rounded-lg border-collapse border-zinc-500 bg-gradient-to-r from-rose-500 to-pink-500">
        <thead className="text-lg font-bold">
          <td className="p-3">Ticket</td>
          <td className=" p-3">Valor</td>
        </thead>
        <tbody>
          <tr>
            <td className="border border-zinc-500 px-3 py -2">
              Ticket para 1 dia
            </td>
            <td className="border border-zinc-500 px-3 py -2">R$ 75,00</td>
          </tr>
          <tr>
            <td className="border border-zinc-500 px-3 py -2">
              Ticket para 7 dias
            </td>
            <td className="border border-zinc-500 px-3 py -2">R$ 380,00</td>
          </tr>
        </tbody>
        <caption class="mt-5 mb-20 caption-bottom">
          2023 - Página exemplo de festival.
        </caption>
      </table>
    </div>
  );
}

export default Ticket;