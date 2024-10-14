const listaSelecaoMangas = document.querySelectorAll(".manga");

listaSelecaoMangas.forEach(manga => {
	manga.addEventListener("click", () => {
		esconderCartaoManga();

		const idMangaSelecionado = mostrarCartaoMangaSelecionado(manga);

		desativarMangaNaListagem();
		ativarMangaSelecionadoNaListagem(idMangaSelecionado);

	})
})


function ativarMangaSelecionadoNaListagem(idMangaSelecionado) {
	const mangaSelecionadoNaListagem = document.getElementById(idMangaSelecionado);
	mangaSelecionadoNaListagem.classList.add("ativo");
}

function desativarMangaNaListagem() {
	const mangaAtivoNaListagem = document.querySelector(".ativo");
	mangaAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoMangaSelecionado(manga) {
	const idMangaSelecionado = manga.attributes.id.value;
	const idDoCartaoMangaParaAbrir = "cartao-" + idMangaSelecionado;
	const cartaoMangaParaAbrir = document.getElementById(idDoCartaoMangaParaAbrir);
	cartaoMangaParaAbrir.classList.add("aberto");
	return idMangaSelecionado;
}

function esconderCartaoManga() {
	const cartaoMangaAberto = document.querySelector(".aberto");
	cartaoMangaAberto.classList.remove("aberto");
}

