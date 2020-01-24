export default{
    // 两个参数 state  city外部传递的city
    changeCity(state , city){
        state.city = city
        try{
          localStorage.city = city
        }catch(e){
          alert(e)
        }
      }
}