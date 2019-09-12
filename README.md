# angularjs-studies
courses and pocs about AngularJS 


## Service vs Provider vs Factory

- O service fabrica a depêndencia criando uma instancia da função passada, ou seja, o angularjs vai instanciar a função/classe utilizando o new na função passada.

- O factory fabrica a dependência simplesmente chamando a função passada, logo, seu provider vai consistir do que quer que você tenha retornado de dentro da função.

- O provider é utilizado quando você precisa aplicar configurações no provider antes dele ser utilizado, ou seja, ele é o unico que pode ser injetado dentro do método .config(... do seu modulo com o sufixo Provider.


## Diretivas

- Restrict (Tipos de Restrição):
    - A -> Diretiva restrita ao atributo do elemento.
    - B -> Restrita ao elemento.
    - C -> Restrita a classe do elemento.
    - M -> Restrita ao comentario do elemento. 
