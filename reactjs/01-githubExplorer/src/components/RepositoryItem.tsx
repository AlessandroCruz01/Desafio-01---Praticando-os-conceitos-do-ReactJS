import './../styles/repositories.scss'

interface RepositoryProps {
    name: string,
    description: string,
    html_url: string
}


export function RepositoryItem(props: RepositoryProps) {
    return(
        <li>
            <strong>{props.name ?? 'Default'}</strong>
            <p> {props.description} </p>

            <a href={props.html_url}>
                Acessar Repositorios
            </a>
        </li>
    )
}