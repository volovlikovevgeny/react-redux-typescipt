import React, { ReactElement, useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const RepositoriseList = (): ReactElement => {
    const [term, setTerm] = useState<string>('');
    const { searchRepositories } = useActions();
    const { data, error, loading } = useTypedSelector((state) => state.repositories);

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTerm(e.target.value);
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        searchRepositories(term);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={term} onChange={onChangeInput} />
                <button>Search</button>
            </form>
            {error && <h1>Error{error}</h1>}
            {loading && <h1>Loading</h1>}
            {!error && !loading && data.map(name => <div key={name}>{name}</div>)
            }
        </div>
    );
};

export default RepositoriseList;
