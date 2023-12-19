import {useState, useRef} from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import LifeCycle from './LifeCycle';

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);
  const onCreate = (author, content, emotion) => {
    const created_date= new Date().getTime();
    dataId.current += 1;
    const newItem = {
      id: dataId.current,
      author,
      content,
      emotion,
      created_date
    }
    setData([newItem, ...data]);
  };

  const onRemove = (targetId) => {
    const newDiaryList = data.filter((elem) => elem.id !== targetId);
    setData(newDiaryList);
  };

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((elem) => elem.id === targetId ? {...elem, content: newContent} : elem)
    )
  };

  return (
    <div className="App">
      <LifeCycle></LifeCycle>
      <DiaryEditor onCreate={onCreate}></DiaryEditor>
      <DiaryList onRemove={onRemove} onEdit={onEdit} diaryList={data}></DiaryList>
    </div>
  );
}

export default App;
