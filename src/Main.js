import content from './content.json';
import {useState} from 'react';

export default function Main() {

    const [listItem, setListItem] = useState([
        {id: 1, label: 'first one', check: false},
        {id: 2, label: 'second one', check: false},
    ]);

    const [inputContent, setInputContent] = useState('')

    return(
        <div>
            {content.map(item => <section><h2>{item.name}</h2><div>{item.body}</div></section>)}
            <input type={'text'}
                   placeholder={'type something'}
                   value={inputContent}
                   onChange={event => setInputContent(event.target.value)}
                   onKeyPress={
                       (event) => {
                           if (event.key === 'Enter') {setListItem([...listItem,
                               {
                                   id: Date.now(),
                                   label: inputContent,
                                   check: false
                               }])
                               setInputContent('');
                           }
                           console.log(listItem);}
                   }
            />
            <ul>
                {listItem.map(item =>
                    <li>
                        <label>
                            <input type={'checkbox'} defaultChecked={false}/>
                            <span>{item.label}</span>
                        </label>
                    </li>)}
            </ul>
        </div>
    );

}