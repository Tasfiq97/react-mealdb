

const addToDb=(item)=>{
    const db=getDb();
    if(item in db){
        db[item]=db[item]+1;
    }
    else{
   db[item]=1
    }
   localStorage.setItem("cart",JSON.stringify(db))
}
const removeDb=(item)=>{
    const db=getDb()
     delete db[item];
     localStorage.setItem("cart",JSON.stringify(db))
}

const getDb=()=>{

    let saveDb=localStorage.getItem("cart");
    
    return saveDb ? JSON.parse(saveDb): {};
}

export{addToDb,getDb,removeDb}