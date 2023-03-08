# 일기 사이트

## My Daily Diary

새글 작성하기
작성 리스트 보여주기
작성 리스트 수정, 삭제
작성 날짜

### App.js

여러 컴포넌트에서 쓰이는 state를 props를 용이하게 하기위해 제일 상위인 App.js에 만들었습니다.
작성 값을 localStorage에 저장하게 한 후 setItem으로 저장하고 getItem으로 가져오게 했습니다.
array/ object를 JSON으로 변환하기 위해 JSON.stringify()을 사용하였습니다.
JSON을 array/ object으로 변환하기 위해 JSON.parse()을 사용하였습니다.
Routes를 사용해 path와 element로 각 컴포넌트를 연결 시켰습니다.
path에 "\*"를 넣어 404페이지를 만들었습니다.

### Write.js

useNavigate()를 시용해 작성한 후 "저장" 버튼을 누르면 목록 페이지로 이동하게 하였습니다.
toLocaleDateString()를 사용해 작성 날짜가 입력되게 하였습니다.

### List.js

header오른쪽에 새글 작성 버튼을 만들었습니다.
useParams를 사용해 제목을 누르면 클릭한것을 렌더링해 해당 /detail/id 페이지로 넘어가 수정과 삭제를 할 수있게 하였습니다.

### Detail.js

header오른쪽에 목록으로 가기 버튼을 만들었습니다.
useNavigate()를 시용해 수정 버튼을 누르면 /modify/id 페이지로 넘어가 수정을 할 수 있게 하였습니다.
useNavigate()를 시용해 삭제 버튼을 누르면 filter()를 이용해 해당 아이디에 해당하는 객체를 삭제하고 /list 페이지로 넘어가게 하였습니다.

### Modify.js

useNavigate()를 시용해 작성한 후 "수정하기" 버튼을 누르면 목록 페이지로 이동하게 하였습니다.
toLocaleDateString()를 사용해 작성 날짜 사용으로 작성날짜를 수정한 날짜로 업데이트 됩니다.
