export default function CharacterCard ({character}) {

    return (
        <li className="card">
        <img src={character.image}/>
        <h2> {character.name}</h2>
        <p>
        {character.species}
        {character.status}
        </p>
        
        </li>
    )
}