import { CharacterCard } from "./CharacterCard";

export const CharacterCardList = ({ allpeople }) => {

    return (
        <>
            <div className="row d-flex flex-nowrap overflow-auto">
                {
                    allpeople.map(person => {
                        return (
                            <CharacterCard
                                key={person.uid}
                                uid={person.uid}
                                name={person.name}
                            />
                        );
                    })
                }
            </div>
        </>
    );
}
