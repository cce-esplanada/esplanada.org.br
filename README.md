---
title: README
---

# Site do Centro Cultural Esplanada

O [Centro Cultural Esplanada](http://esplanada.org.br) é uma iniciativa para a formação humana integral de homens em todas as etapas de suas vidas, contribuindo para o seu amadurecimento profissional, pessoal e espiritual.
Acesse: esplanada.org.br

---

## 🏗️ Como configurar o ambiente para desenvolvimento do Site

<a href="https://jekyllrb.com" target="_blank"><img src="https://jekyllrb.com/img/logo-2x.png" alt="Jekyll" width="200" /></a>

O site foi desenvolvido com [Jekyll](https://jekyllrb.com), um gerador de sites estáticos, o qual pega o texto escrito em sua linguagem de marcação favorita e usa layouts para criar o site estático. Com o Jekyll é possível ajustar a aparência do site, as URLs, os dados exibidos na página e muito mais.

Aqui você encontra o procedimento para [instalação do Jekyll](https://jekyllrb.com/docs/installation).

O *template* base utilizado foi o [Editorial by HTML5 UP](https://html5up.net/editorial).

**Abrir o site localmente**

1. Vá para o diretório do site (.../esplanada.org.br)
`cd esplanada.org.br`

2. Faça o build e sirva num servidor local
```
bundle exec jekyll serve
```

3. Navegue até http://localhost:4000

3. Parar o servidor local
`ctrl + c`

---

## 🚀 Como atualizar o Site em produção

### Pre-requisitos
1. Script criado para o S.O. Windows.
2. É necessário ter o [WinSCP](http://winscp.net) instalado. O WinSCP é um cliente SFTP e cliente FTP popular para Microsoft.
3. É necessário ter o script `deploy-esplanada.org.br.txt` na pasta raíz da instalação do WinSCP.

### Procedimentos
1. Basta executar o arquivo: `_resources/deploy-esplanada.org.br.bat`
