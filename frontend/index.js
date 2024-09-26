const backendurl = 'http://localhost:3000/livros';
document.addEventListener('DOMContentLoaded', () => {
    const livroForm = document.getElementById('livro-form');
    const livrosList = document.getElementById('livros');
  
    async function listarLivros() {
      try {
        const response = await fetch(backendurl);
        const livros = await response.json();
  
        livrosList.innerHTML = '';
        livros.forEach(livro => {
          const livroDiv = document.createElement('div');
          livroDiv.classList.add('livro');
          livroDiv.innerHTML = `
            <h3>${livro.nome}</h3>
            <p><strong>Ano:</strong> ${livro.ano}</p>
            <p><strong>Editora:</strong> ${livro.editora}</p>
            <p><strong>Gênero:</strong> ${livro.genero}</p>
            <p><strong>Autor:</strong> ${livro.autor}</p>
            <p><strong>Descrição:</strong> ${livro.descricao || 'N/A'}</p>
          `;
          livrosList.appendChild(livroDiv);
        });
      } catch (error) {
        console.error('Erro ao listar livros:', error);
      }
    }
  
    livroForm.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      const novoLivro = {
        nome: document.getElementById('nome').value,
        ano: document.getElementById('ano').value,
        editora: document.getElementById('editora').value,
        genero: document.getElementById('genero').value,
        autor: document.getElementById('autor').value,
        descricao: document.getElementById('descricao').value,
      };
  
      try {
        const response = await fetch(backendurl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(novoLivro)
        });
  
        if (response.ok) {
          alert('Livro adicionado com sucesso!');
          livroForm.reset();
          listarLivros(); 
        } else {
          alert('Erro ao adicionar livro');
        }
      } catch (error) {
        console.error('Erro ao adicionar livro:', error);
      }
    });
    listarLivros();
  });