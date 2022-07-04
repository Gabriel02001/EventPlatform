

interface cardProps {
title: string;
lessonType: string;
AvailableAt: string;
}

export function Card({title, lessonType, AvailableAt}:cardProps){
    return(
        <div className="flex flex-col flex-1">
         <header className="">{AvailableAt}</header>
            
          <main className="w-full">
           <span>Conteudo liberado</span> <h1>{lessonType}</h1>
           <p>{title}</p>
          </main>
        </div>
    )
}