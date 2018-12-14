//액션 타입 정의
export const HEART_VIDEO_LIST = 'List/HEART_VIDEO';

//액션 생성함수 정의
export const changeList = list => ({ type: HEART_VIDEO_LIST, list });

//초기 상태 정의
const initialState = {
  list: []
};

//리듀서 작성
function List(state = initialState, action) {
  console.log('state => ', state, 'action => ', action);
  switch (action.type) {
    case HEART_VIDEO_LIST:
      return {
        ...state,
        list: action.list,
      };
    default:
      return state;
  }
}

export default List;