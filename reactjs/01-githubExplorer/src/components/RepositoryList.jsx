import { RepositoryItem } from "./RepositoryItem"

const rep = {
    name: 'unform',
    description: 'Forms in React',
    link: 'http://google.com'
}

export function RepositoryList() {
    return(
        <section>
            <h1>Lista de repositórios</h1>

            <ul>
                <li>
                    <RepositoryItem 
                        repository={rep}
                    />
                    <RepositoryItem repository={rep}/>
                    <RepositoryItem repository={rep}/>
                    <RepositoryItem repository={rep}/>
                </li>

            </ul>

        </section>
    )
}