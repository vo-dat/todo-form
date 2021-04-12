import { useState } from 'react';
import './App.module.css';
import ListInfo from './components/ListInfo/ListInfo';

function App() {
   const [info, setInfo] = useState([]);

   const [item, setItem] = useState({
    txtName:'',
    txtPassword: '',
    txtDesc:'',
	sltgender:'Male'
   });

   function handelOnChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setItem({...item,
      		[name]: value
    });
   }

	function OnReset(){
		console.log('Reset');
		setItem({txtName:'',txtDesc:'',txtPassword:'',sltgender:'Male'})
	}

   function handelOnSubmit(e){
		e.preventDefault();
		console.log(item);
		const newList=[...info];
		newList.push(item);
		setInfo(newList);
		setItem({txtName:'',txtDesc:'',txtPassword:'',sltgender:'Male'})
   }
  
   return (
    <div className="App">
      <h1>React Todo Form</h1>;
      
		<div className="container">
			<div className="row">
				<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
					<div className="panel panel-default">
						<div className="panel-heading">
							<h3 className="panel-title">ToDo Form</h3>
						</div>
						<div className="panel-body">
						
							<form
								onSubmit={handelOnSubmit}> 
								<div className="form-group">
									<label>UserName: </label>
									<input  
										name="txtName" 
										type="text" 
										className="form-control"  
										value={item.txtName} 
										onChange={handelOnChange} 
										placeholder="Input"/>
								
									<label>PassWord: </label>
									<input 
										name="txtPassword" 
										type="password"  
										className="form-control"  
										value={item.txtPassword} 
										onChange={handelOnChange} 
										placeholder="Inputt"/>  
							
									<label>Gender</label>
								
									<select name="sltgender" 
											value={item.sltgender}
											onChange={handelOnChange} 
											className="form-control" 
											required="required">
										<option value="Male">Male</option>
										<option value="Female">Female</option>
									</select>
											
									<label>Description: </label>
									<textarea 
										name="txtDesc" 
										className="form-control"  
										value={item.txtDesc} 
										onChange={handelOnChange}>
									</textarea>
								</div>
							
							<button type="submit" 
									className="btn btn-primary">Submit</button>&nbsp; 
						
							<button type="reset" 
									className="btn btn-danger" onClick={OnReset}>Reset ALL</button>
						
						</form>
					</div>
					</div>
					</div>   
				<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
					
					<div className="table-responsive">
						<table className="table table-hover">
							<thead>
								<tr>
									<th>Name</th>
									<th>Password</th>
									<th>Gender</th>
								</tr>
							</thead>
							<ListInfo listInfo={info}/>
						</table>
					</div>
					
					
					
				</div>
			    
        	</div>  
    </div>
      
   </div>
  );
   
}

export default App;
