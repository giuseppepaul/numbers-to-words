import { ChangeEvent, MouseEvent, useCallback, useState } from 'react';
import numToWords from './numToWords';

type Props = {
    defaultValue: number;
};

function NumberToWordsConverter({ defaultValue = 100 }: Props) {
    const [num, setNum] = useState(defaultValue);
    const [words, setWords] = useState(numToWords(defaultValue));

    const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => setNum(+event.currentTarget.value), []);

    const onClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
        setWords(numToWords(num));
    }, [num]);

    return (
        <div className="row justify-content-center mt-5">
            <div className="col col-lg-4">
                <div className="card">
                    <div className="card-header">
                        Converter
                    </div>
                    <div className="card-body">
                        <p className="text-center lead capitalize-first">{words}</p>
                        <div className="input-group mb-3">
                            <input type="number" value={num} onChange={onChange} className="form-control" placeholder="Enter a number to convert" aria-label="Number to convert" aria-describedby="button-addon2" />
                            <button className="btn btn-outline-secondary" onClick={onClick} type="button" id="button-addon2">Convert</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NumberToWordsConverter;
