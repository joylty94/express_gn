const get = async (req, res, next) => {
    try{
        return res.json({ message: 'users get' });
    }catch(e){
        next(e) // 에러핸들러 실행
    }
}

export {
    get
}