import CharacterCard from "../components/CharacterCard";

export default function CharacterList ({characters}) {

    return(
        <ul className="grid">
            {characters.map((character) => (
                <CharacterCard key={character.id} character = {character}>

                </CharacterCard>
            ))}

        </ul>
    );
}