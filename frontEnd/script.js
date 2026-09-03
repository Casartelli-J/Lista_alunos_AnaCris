async function getAlunos(){
	const nome = document.querySelector("#nome").value;
	const consulta = await fetch(`http://localhost:3000/alunos?nome=${nome}`, {
		method : "GET",
		headers : {
			"Content-Type" : "application/json"
		}
	})

	const listaAlunos = await consulta.json();
	console.log(listaAlunos);

	let corpoLista = "";
	listaAlunos.forEach( aluno => {
		if(aluno.cor === 0){
			aluno.cor = "Rosa bebê";
		}else if(aluno.cor === 1){
			aluno.cor = "Rosa pink";
		}else if(aluno.cor === 2){
			aluno.cor = "Azul"
		}

		if(aluno.tamanho === 0){
			aluno.tamanho = "PP";
		}else if(aluno.tamanho === 1){
			aluno.tamanho = "P";
		}else if(aluno.tamanho === 2){
			aluno.tamanho = "M";
		}else if(aluno.tamanho === 3){
			aluno.tamanho = "G";
		}else if(aluno.tamanho === 4){
			aluno.tamanho = "GG";
		}

		if(aluno.malha === 0){
			aluno.malha = "Algodão";
		}else if(aluno.malha === 1){
			aluno.malha = "Dry Fit";
		}
		corpoLista += `
			<tr class="text-center">
				<td>
					${aluno.nome}
				</td>
				<td>
					${aluno.cor}
				</td>
				<td>
					${aluno.tamanho}
				</td>
				<td>
					${aluno.malha}
				</td>
				<td>
					R$ ${aluno.preco}
				</td>
				<td>
					<button class="btn btn-primary" onclick="pegaDadosAluno(${aluno.id})" data-bs-toggle="modal" data-bs-target="#updModal">Editar</button>
					<button class="btn btn-danger" onclick="deletarAluno(${aluno.id})">Excluir</button>
				</td>
			</tr>
		`
	})

	document.querySelector("#corpoLista").innerHTML = corpoLista;
}
getAlunos();


async function pegaDadosAluno(id){
	const pegaDado = await fetch(`http://localhost:3000/alunos?id=${id}`, {
		method : "GET",
		headers : {
			"Content-Type" : "application/json"
		}
	})

	const dadoTratado = await pegaDado.json();
	document.querySelector("#updId").value = dadoTratado[0].id;
	document.querySelector("#updNome").value = dadoTratado[0].nome;
	document.querySelector("#updCor").value = dadoTratado[0].cor;
	document.querySelector("#updTamanho").value = dadoTratado[0].tamanho;
	document.querySelector("#updMalha").value = dadoTratado[0].malha;
	document.querySelector("#updPreco").value = dadoTratado[0].preco;

}

async function updAluno(){
	
	const id = document.querySelector("#updId").value;
	const nome = document.querySelector("#updNome").value
	const cor = document.querySelector("#updCor").value
	const tamanho = document.querySelector("#updTamanho").value
	const malha = document.querySelector("#updMalha").value
	const preco = document.querySelector("#updPreco").value

	const update = await fetch(`http://localhost:3000/alunos/${id}`, {
		method : "PUT",
		headers : {
			"Content-Type" : "application/json"
		},
		body : JSON.stringify({
			nome : nome,
			cor : cor,
			tamanho : tamanho,
			malha : malha,
			preco : preco
		})
	})
	if(!update){
		console.log("Não foi")
	}else{
		document.querySelector("#updForm").reset()
		getAlunos();
	}
}

async function postAluno(){

	const nome = document.querySelector("#modalNome").value
	const cor = document.querySelector("#cor").value
	const tamanho = document.querySelector("#tamanho").value
	const malha = document.querySelector("#malha").value
	const preco = document.querySelector("#preco").value

	const post = await fetch(`http://localhost:3000/alunos`, {
		method : "POST",
		headers : {
			"Content-Type" : "application/json"
		},
		body : JSON.stringify({
			nome : nome,
			cor : cor,
			tamanho : tamanho,
			malha : malha,
			preco : preco
		})
	})

	if(!post.ok){
		console.log("N")
	}else{
		getAlunos();
		document.querySelector("#addForm").reset();
	}
}

async function deletarAluno(id){
	const conf = confirm("Tem certeza?");
	if(conf){
		const deletar = await fetch(`http://localhost:3000/alunos/${id}`, {
			method : "DELETE",
			headers : {
				"Content-Type" : "application/json"
			}
		})
	}

	getAlunos();
}