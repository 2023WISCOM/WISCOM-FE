import React, { useState } from 'react';
import * as C from './ContentStyle';

export default function Content() {
  const [name, setName] = useState(''); //이름
  const [inputText, setInputText] = useState(''); // 입력된 텍스트를 저장하는 상태
  const maxLength = 200; // 최대 글자 수
  const [entries, setEntries] = useState([]); // 입력된 내용을 저장하는 배열
  const entriesPerPage = 6; // 한 페이지에 보일 엔트리 개수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지

  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    return `${year}-${month}-${day}`;
  };
  const handleNameChange = (event) => {
    const name = event.target.value;
    if (name.length <= 7) {
      setName(name);
    }
  };

  // 입력된 텍스트가 변경될 때 호출되는 함수
  const handleInputChange = (e) => {
    const text = e.target.value;
    if (text.length > maxLength) {
      setInputText(text.slice(0, maxLength));
    } else {
      setInputText(text);
    }
  };

  const isSubmitDisabled = inputText === '' || inputText.length > maxLength || name === ''; //완료 버튼 비활성화 조건

  // 완료 버튼 클릭 시 입력된 내용을 목록에 추가하는 함수
  const handleAddEntry = () => {
    if (inputText.trim() !== '') {
      const newEntry = {
        text: inputText,
        date: getCurrentDate(),
        name: name,
      };

      setEntries([newEntry, ...entries]);
      setInputText(''); // 입력 필드 초기화
      setName('');
    }
  };
  // 현재 페이지의 엔트리 배열
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const currentEntries = entries.slice(startIndex, endIndex);

  // 페이지 변경 처리
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <C.ContentContainer>
      <C.Title>방명록을 남겨주세요</C.Title>
      <br />
      <br />
      <br />
      <br />
      <br />
      <C.InputBox>
        <C.CommentInput
          type="text"
          placeholder="이름을 7자 이내로 입력해주세요" // 이름을 입력할 플레이스홀더 추가
          value={name}
          onChange={handleNameChange} // 이름을 입력하는 이벤트 핸들러 추가
        />
          <C.ContentInput
            placeholder="방명록을 작성해주세요"
            value={inputText}
            onChange={handleInputChange}
            maxLength={maxLength}
          />
        <C.InputCount>
          {inputText.length}/{maxLength}
        </C.InputCount>
        
      </C.InputBox>
      <br />

      <C.Button onClick={handleAddEntry} disabled={isSubmitDisabled}>
        완료
      </C.Button>

      <C.Entries>
        {currentEntries.map((entry, index) => (
          <C.EntryItem key={index}>
            <C.EntryDate>
              {entry.name} {entry.date}
            </C.EntryDate>
            <br />
            <C.EntryWrapper>
            <C.EntryText>{entry.text}</C.EntryText>
            </C.EntryWrapper>
          </C.EntryItem>
        ))}
      </C.Entries>

      <C.Pagination>
        <ul>
          {Array.from({ length: Math.ceil(entries.length / entriesPerPage) }).map((_, index) => (
            <li
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? 'active' : ''}>
              {index + 1}
            </li>
          ))}
        </ul>
      </C.Pagination>
    </C.ContentContainer>
  );
}
