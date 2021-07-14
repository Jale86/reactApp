import React, {useState} from "react";
import Header from "./components/Header/Header";
import {Route,BrowserRouter,Switch} from "react-router-dom";
import AccountsTable from "./components/AccountsTable/AccountsTable";
import AddAccount from "./components/AddAccount/AddAccount";
import EditTable from "./components/EditTable/EditTable";
import EditAccount from "./components/EditAccount/EditAccount";


function App () {

  const [accounts,setAccounts] = useState ([
          {id:1,name:"Jasna",lastname:"Spasic",phone:"11-22-33",email:"js@msms.com"},
          {id:2,name:"Jana",lastname:"Spasic",phone:"11-222",email:"js=@msms.com"}
        ]
  )

  const addNewAccountToState = (acc) =>{
      setAccounts([...accounts,acc])
  }

  const deleteAccount = (id) =>{
    const newCopyAccounts = accounts.filter(account =>account.id !== id);
    setAccounts(newCopyAccounts)
  }

  const editAccount = (acc) =>{
    let accountPossition = accounts.map(account => account.id).indexOf(acc.id)
    accounts[accountPossition] = acc;
    setAccounts(accounts)
  }

    return(
      <BrowserRouter>
         <Header/>
         <Route path="/" exact>
              <AccountsTable accounts={accounts}/>
         </Route>

         <Route path="/add">
            <AddAccount addNewAccountToState={addNewAccountToState}/>
         </Route>

        <Switch>
            <Route path="/edit/:id">
                  <EditAccount accounts={accounts} editAccount={editAccount}/>
            </Route>

            <Route path="/edit">
                <EditTable accounts={accounts} deleteAccount={deleteAccount}/>
            </Route>    
        </Switch>
      
      </BrowserRouter>
     )

}

export default App;
