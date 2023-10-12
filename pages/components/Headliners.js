import React from 'react'
import HeadlinerItem from "./HeadlinerItem";

function Headliners() {
  return (
    <div className="mx-auto mt-20 max-w-screen-lg text-zinc-900">
      <h2>Atrações Principais</h2>
      <p>
        Experimente o prazer de assistir esses artistas durante esses 7 dias,
        eles lhe levarão a uma das melhores experiências musicasis do ano.
      </p>

      <div className="mt-4 flex w-full snap-x gap-4 overflow-x-auto pb-5">
        <HeadlinerItem
          artist="Pitty"
          imageUrl="/images/band1.jpg"
          date="3 de Novembro 21h - Palco Principal"
        />

        <HeadlinerItem
          artist="Paralamas do Sucesso"
          imageUrl="/images/band2.jpg"
          date="4 de Novembro 21h - Palco Principal"
        />

        <HeadlinerItem
          artist="Los Hermanos"
          imageUrl="/images/band3.jpg"
          date="5 de Novembro 21h - Palco Principal"
        />

        <HeadlinerItem
          artist="Capital Inicial"
          imageUrl="/images/band4.png"
          date="9 de Novembro 21h - Palco Principal"
        />

        <HeadlinerItem
          artist="Nenhum de Nós"
          imageUrl="/images/band5.jpg"
          date="10 de Novembro 21h - Palco principal"
        />

        <HeadlinerItem
          artist="Legião Urbana"
          imageUrl="/images/band6.jpg"
          date="11 de Novembro 21h - Palco principal"
        />

        <HeadlinerItem
          artist="Titãns"
          imageUrl="/images/band7.jpg"
          date="12 de Novembro 21h - Palco principal"
        />
      </div>
      <div className="font-bold mt-6">
        <h3> e mais...</h3>
        <p className="items-center">
          Detonautas - Planet Hemp - - Humberto Gessinger - Cachorro Grande -
          Supla - Blues Boy Band - Raimundos - Dead Fish - Fresno  Uns e Outros -
          Biquini Cavadão - CPM 22 
        </p>
      </div>
    </div>
  );
}

export default Headliners;