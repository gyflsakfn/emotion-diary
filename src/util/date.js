// new Date 객체의 값을 YYYY-MM-DD등 형식으로 변환
// 반복 코드를 줄이기 함수를 내보냄
// DiaryEditor, Diary에서 사용
export const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
};
