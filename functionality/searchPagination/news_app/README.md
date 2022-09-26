create basic react structure Seach stories Pagination 
API website : https://hn.algolia.com/api
API GET : http://hn.algolia.com/api/v1/items/:id

function fetchApiData (by await) => Get data

made a condition for isLoading to show / Hide Loading sigh till its loading by=> useContext & ContextApi


    Context : create context(Store all data to Top Parent storeRoom) => provider(Who will deliver data in each location/element) => consumer(Who want data)

import AppProvider to inex.js so it be available at every Element;

[
App.js => Import useContext & AppContext =>   const data = useContext(AppContext); => Now you can access all data  
]
# OR i can create my own custome HOOK to eliminatte importing from app.js
[
    useGlobalContext = () => {
        return useContext(AppContext)
    }
]

#useReducer Hook;
    const [state , dispatch] = useReducer(reducer, initialState); => reducer from reducer file => as action
    copy page fetchApiData code and add dispatch function in it.

now adding data to hits array by using reducer 

initialState(hits,nbPage) => dispatch passes hits:data.hits & nbPage & trigger action type : data.nbPage => reducer switchcase return hits : as payload
and then 
        <!-- <AppContext.Provider value={{...state}}>{children}</AppContext.Provider> -->
isLoading is also pass from initialState to dispatch to reducer to story

# REmove functionalirt
