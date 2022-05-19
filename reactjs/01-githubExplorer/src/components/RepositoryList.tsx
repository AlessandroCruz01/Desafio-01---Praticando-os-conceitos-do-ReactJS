import { useState, useEffect } from "react"
import { RepositoryItem } from "./RepositoryItem"


// https://api.github.com/orgs/rocketseat/repos

const rep = {
    name: 'unform',
    description: 'Forms in React',
    link: 'http://google.com'
}

export function RepositoryList() {

    interface Repository {
        name: string,
        description: string,
        html_url: string
    }

    const [repositorios , setRepositorios ] = useState<Repository[]>([])

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => setRepositorios(data))
    }, [])

    return(
        <section className="repository-list ">
            <h1>Lista de repositórios</h1>

            <ul>
                <li>
                    {repositorios.map(repositorio => {
                        return(
                            <RepositoryItem key={repositorio.name} repository={repositorio}/>
                        )
                    })}

                  
                </li>

            </ul>

        </section>
    )
}