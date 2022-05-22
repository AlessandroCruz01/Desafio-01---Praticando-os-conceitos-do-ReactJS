import './../styles/repositories.scss'

interface RepositoryProps {
    repositorio: {
        name: string,
        description: string,
        html_url: string
    }
}

export function RepositoryItem(props: RepositoryProps) {
    return(
        <li>
            <strong>{props.repositorio.name ?? 'Default'}</strong>
            <p> {props.repositorio.description} </p>

            <a href={props.repositorio.html_url}>
                Acessar Repositorios
            </a>
        </li>
    )
}