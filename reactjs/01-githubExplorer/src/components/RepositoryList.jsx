import { useState, useEffect } from "react"
import { RepositoryItem } from "./RepositoryItem"


// https://api.github.com/orgs/rocketseat/repos

const rep = {
    name: 'unform',
    description: 'Forms in React',
    link: 'http://google.com'
}

export function RepositoryList() {

    const [repositorios , setRepositorios ] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => setRepositorios(data))
    }, [])

    return(
        <section class="repository-list ">
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