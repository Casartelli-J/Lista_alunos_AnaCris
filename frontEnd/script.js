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
			aluno.cor = "Rosa"
		}else if(aluno.cor === 1){
			aluno.cor = "Rosa claro"
		}

		if(aluno.tamanho === 0){
			aluno.tamanho = "P"
		}else if(aluno.tamanho === 1){
			aluno.tamanho = "M"
		}
		corpoLista += `
			<tr>
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
					${aluno.preco}
				</td>
				<td>
					<button class="btn btn-primary">Editar</button>
					<button class="btn btn-danger">Excluir</button>
				</td>
			</tr>
		`
	})

	document.querySelector("#corpoLista").innerHTML = corpoLista;
}
getAlunos();

async function postAluno(){
	// const novoAluno = {
		const nome = document.querySelector("#nome").value
		const cor = document.querySelector("#cor").value
		const tamanho = document.querySelector("#tamanho").value
		const malha = document.querySelector("#malha").value
		const preco = document.querySelector("#preco").value
	// }

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

	console.log("Foi?")
}