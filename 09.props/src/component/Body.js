import Button from "./Button";
import Header from "./Header";
/*
// 1. 변수에 담긴 값을 Body로 넘겨주기
const Body = (props) => {
    return (
        <>
            <h3>본문</h3>
            <p>{props.address}</p>
            <p>{props.user}</p>
        </>
    )
}
*/
/*
// 2-1. 객체형태로 넘기기
const Body = (props) => {   // props로 묶어서 받기
    return (
        <>
            <h3>본문</h3>
            <p>{props.userInfo.name}님은 {props.userInfo.addr}에 살고 있습니다</p>
            <p>내가 좋아하는 것들은 {props.userInfo.likeList}의 {props.userInfo.likeList.length}개를 좋아합니다</p>
            <p>그 중에서 가장 좋아하는 것은 {props.userInfo.likeList[1]}입니다</p>
        </>
    )
}
*/

/*
// 2-2. 객체형태의 값을 풀어서 넘겨준 값 받기
const Body = ({name, addr, likeList}) => {  // props를 풀어서 값 하나하나 다 받기
    return (
        <>
            <h3>본문</h3>
            <p>{name}님은 {addr}에 살고 있습니다</p>
            <p>내가 좋아하는 것들은 {likeList}의 {likeList.length}개를 좋아합니다</p>
            <p>그 중에서 가장 좋아하는 것은 {likeList[1]}입니다</p>
        </>
    )
}
*/

// 3.
const Body = () => {
    function btnClick(e) {
        alert('버튼이 클릭되었습니다!');
        console.log(e);
    }
const btnProps = {
    text : "1번",
    color : "navy",
    a:"yellow",
    b:2,
    c:3
}
    return (
        <>
            <h3>본문</h3>
            <button onClick={btnClick} name="A버튼">A이벤트 버튼</button><br/><br/>
            <button onClick={btnClick} name="B버튼">B이벤트 버튼</button><br/><br/>
            <Button {...btnProps} /><br/><br/>
            <Button />
        </>
    )
}




export default Body;