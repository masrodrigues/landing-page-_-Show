import React from 'react'


function LineUp() {
  return (
    <div className="mx-auto max-w-screen-lg">
      <h2 className="mt-20">Programação</h2>

      <p>Siga o horário e o palco para para conferir seus artistas favoritos</p>

      <div className="relative mt-5 rounded-lg bg-zinc-800 py-4 px-2 text-zinc-200">
        <div className="absolute top-0 left-1/2 -ml-[8px] h-full w-4 rounded-full bg-gradient-to-b from-sky-900 via-cyan-900 to-teal-900">
          <div className="sticky top-1/2">
            <div className="relative h-4 w-4">
              <div className="absolute h-4 w-4 animate-ping rounded-full bg-pink-500 opacity-75"></div>
              <div className="relative h-4 w-4 rounded-full bg-rose-500"> </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="my-4 rounded-lg bg-zinc-900 p-8">03 de Novembro</h4>
          </div>
          <div></div>
          <div className="text-right">
            <div className="font-bold">Supla</div>
            <div className="text-zin-400">18 Horas - Palco Stage</div>
          </div>

          <div></div>
          <div></div>

          <div className="text-left">
            <div className="font-bold">Pitty</div>
            <div className="text-zin-400">21 Horas - Palco Principal</div>
          </div>

          {/* ############################################################# */}
          <div>
            <h4 className="my-4 rounded-lg bg-zinc-900 p-8">04 de Novembro</h4>
          </div>
          <div></div>

          <div className="text-right">
            <div className="font-bold">Cachorro Grande</div>
            <div className="text-zin-400">18 Horas - Palco Stage</div>
          </div>

          <div></div>
          <div></div>

          <div>
            <div className="font-bold">Paralamas do Sucesso</div>
            <div className="text-zin-400">21 Horas - Palco Principal</div>
          </div>
          {/* ############################################################# */}
          <div>
            <h4 className="my-4 rounded-lg bg-zinc-900 p-8">05 de Novembro</h4>
          </div>
          <div></div>

          <div className="text-right">
            <div className="font-bold">Dead Fish</div>
            <div className="text-zin-400">18 Horas - Palco Stage</div>
          </div>

          <div></div>
          <div></div>

          <div>
            <div className="font-bold">Los Hermanos</div>
            <div className="text-zin-400">21 Horas - Palco Principal</div>
          </div>
          {/* ############################################################# */}
          <div>
            <h4 className="my-4 rounded-lg bg-zinc-900 p-8">09 de Novembro</h4>
          </div>
          <div></div>

          <div className="text-right">
            <div className="font-bold">Humberto Gessinger</div>
            <div className="text-zin-400">18 Horas - Palco Stage</div>
          </div>

          <div></div>
          <div></div>

          <div>
            <div className="font-bold">Capital Inicial</div>
            <div className="text-zin-400">21 Horas - Palco Principal</div>
          </div>
          {/* ############################################################# */}
          <div>
            <h4 className="my-4 rounded-lg bg-zinc-900 p-8">10 de Novembro</h4>
          </div>
          <div></div>

          <div className="text-right">
            <div className="font-bold">Detonautas</div>
            <div className="text-zin-400">18 Horas - Palco Stage</div>
          </div>

          <div></div>
          <div></div>

          <div>
            <div className="font-bold">Nenhum de Nós</div>
            <div className="text-zin-400">21 Horas - Palco Principal</div>
          </div>
          {/* ############################################################# */}
          <div>
            <h4 className="my-4 rounded-lg bg-zinc-900 p-8">11 de novembro</h4>
          </div>
          <div></div>

          <div className="text-right">
            <div className="font-bold">CPM 22</div>
            <div className="text-zin-400">18 Horas - Palco Stage</div>
          </div>

          <div></div>
          <div></div>

          <div>
            <div className="font-bold">Legião Urbana</div>
            <div className="text-zin-400">21 Horas - Palco Principal</div>
          </div>
          {/* ############################################################# */}
          <div>
            <h4 className="my-4 rounded-lg bg-zinc-900 p-8">12 de Novembro</h4>
          </div>
          <div></div>

          <div className="text-right">
            <div className="font-bold">Fresno</div>
            <div className="text-zin-400">18 Horas - Palco Sage</div>
          </div>

          <div></div>
          <div></div>

          <div>
            <div className="font-bold">Titãns</div>
            <div className="text-zin-400">21 Horas - Palco Principal</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LineUp;