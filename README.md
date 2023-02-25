# Vanilla Redux

Learning Vanilla Redux and React Redux
Redux 공식사이트: https://redux.js.org/

1. Redux 요소별 역할
- store: application의 data를 저장, reducer 함수를 필요로 함
- reducer: application의 data를 수정할 수 있는 함수, reducer가 return 하는 값이 data가 됨, current state와 action을 필요로 함
- current state: application의 현재 data
- action: reducer가 어떤 수정을 할지 결정해줌, dispatch 함수를 필요로 함
- dispatch: action의 type을 보내줌

2. createStore 내장 함수별 역할
- getState(): 현재 data 값을 출력
- dispatch(): action type을 결정
- subscribe(): reducer에서 data 수정 여부를 출력