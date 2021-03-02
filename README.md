
# Construction d'une Todo List

Dans cet atelier, nous allon apprendre à faire une **Todo List** en utilisant Vue.js et Bulma pour la gestion de notre style.

![Screenshot 2021-03-02 at 02 16 14](https://user-images.githubusercontent.com/26479837/109675544-31661e00-7b78-11eb-8469-699864a9de9a.png)

Dans cet exercise, pour plus de simplicité, nous découperons notre application en 4 composants macro comme montré ci-dessous:

![Screenshot 2021-03-02 at 02 16 14 2](https://user-images.githubusercontent.com/26479837/109675718-53f83700-7b78-11eb-8441-bfa94b000fad.png)


Nous avons déjà installé notre environnement au cours du cours de lundi.  Vous pouvez, pour effectuer l'exercise, faire le choix d'iterer a partir du code de votre application **ou** cloner le présent repo qui contient les références aux 2 libraires de styles utilisées (Bulma et Fontawesome) et la feuille de style de notre composant App.vue .


## Voici les instructions pour réaliser notre Todo list:

### 1. Créer et initialiser notre premier composant TodoCard:
  - Nommer le composant **todo-card**
  - Mettre en place les 3 blocs nécessaires au fonctionnement du composant: script, style et html.
  - Mettre en place le css de la card.

### 2. Référencer et utiliser le composant TodoCard dans le composant App
  - Importer le composant TodoCard dans App.vue.
  - Créer une clé **components** au niveau du script.
  - Afficher la TodoCard dans notre composant App.
  - Mettre en page le style de la card avec Bulma.
  
### 3. Implementer l'en-tête de notre card:
  - Afficher la date du jour complète (jour de la semaine, date, mois: nous aurons donc besoin de calculer la valeur) en haut à gauche de la card.
  - Afficher le nombre de tâches en cours en haut à droite de la card (pour l'instant nous n'avons pas de tâche mais pensez au futur container nécessaire pour les stocker plus tard).
  - Insérer le titre au centre de l'en-tête: **VueJs Tutorial ToDo List**.
  
### 4. Créer le composant NewTodo qui est un des enfants de TodoCard. 
NewTodo permet de créer une nouvelle tâche. Il est composé d'un input pour renseigner le label de notre tâche et d'un bouton d'ajout de la tâche.
  - Nommer le composant **new-todo**.
  - Mise en place du html du composant.
  - Mise en place du style du composant.
  - Utiliser la directive **v-model** pour la gestion de la tâche.
  
### 5. Référencer et utiliser le composant NewTodo dans le composant TodoCard
  - Importer le composant NewTodo dans TodoCard.vue .
  - Créer une clé **components** au niveau du script.
  - Afficher la NewTodo dans notre composant TodoCard.
  
### 6. Créer une communication entre notre composant fille NewTodo et son parent TodoCard par rapport à l'ajout d'une nouvelle tâche
  - Capturer l'ajout d'une nouvelle tâche dans NewTodo à l'aide de la directive **v-on**.
  - Créer une clé **methods** dans NewTodo.
  - Envoyer cet évènement personnalisé, **newTask**, lorsque la tâche est non vide, au composant parent TodoCard au sein d'une fonction **sendTask**.
  - Récupérer l'évènement d'ajout d'une nouvelle tâche (newTask) au niveau du composant parent TodoCard grâce à la directive **v-on**.
  - Écouter l'évènement personnalisé newTask du composant Fille et le gérer via une fonction **addTask**.
  - Au sein de la fonction **addTask**: 
    - Créer notre nouvelle tâche et lui attribuer un statut (permettant de vérifier si la tâche est finie ou non) qui est au statut **unckecked** initialement. 
    - Ajouter la nouvelle tâche renseignée par l'utilisateur au tableau des tâches défini au **4.** .
  

À ce stade nous avons donc:
  - Un composant **TodoCard** permettant d'afficher la date du jour et un nombre de tâches à effectuer.
  - Un composant **NewTodo** permettant de créer des tâches.

![Screenshot 2021-03-02 at 17 36 43](https://user-images.githubusercontent.com/26479837/109681573-e51ddc80-7b7d-11eb-97f4-dc64290e4de8.png)


Nous ne pouvons malheureusement pas encore voir notre liste de tâches et la gérer (suppression ou non). 
Nous allons donc à présent créer notre dernier composant, et le plus important, **TodoList** qui nous permettra de pallier à cela !


### 7. Créer notre composant TodoList:
  - Nommer le composant **todo-list** .
  - Mettre en place le style et le contenu html d'un élèment de la liste (check button, intitulé de la tâche et bouton suppression).

### 8. Référencer et utiliser le composant TodoList dans le composant TodoCard
  - Importer le composant TodoList dans TodoCard.vue .
  - Afficher la TodoList dans notre composant TodoCard.
  - Utiliser la directive **v-bind** dans la balise du composant TodoList au sein du composant TodoCard afin d'envoyer la liste de tâche au composant TodoList.
  
### 9. Récupération et affichage de la liste de tâches dans TodoList:
  - Récupérer la liste de tâche de TodoCard et la stocker au sein d'une **props** dans TodoList.
  - Utiliser la directive **v-for** pour parcourir la liste de tâches (accéder en même temps à l'index de la tâche dans la liste) et afficher le modèle standard (définit au **7.**) pour chaque élément.
 

À ce stade nous pouvons donc ajouter une tâche et afficher notre liste de tâches. 

![Screenshot 2021-03-02 at 17 37 54](https://user-images.githubusercontent.com/26479837/109681710-0b437c80-7b7e-11eb-99e4-958827496c2d.png)

Il nous reste 2 choses à gérer pour avoir une todo list digne de ce nom! 
Nous devons pouvoir cocher un élément de notre liste de tâche et le supprimer. Lorsqu'un élément de la liste est sélectionner, il serait bon que celui-ci 
ait un style modifié permettant de savoir en un coup que celle-ci est considerée comme terminée.


### 10. Modifier le style d'une tâche lorsque celle-ci est selectionne dans notre composant TodoList. On affichera une ligne de coupe.
  - Utiliser la directive **v-bind** pour modifier le style de la tâche en fonction de l'état de la checkbox à gauche de la ligne. On ajoutera une classe checked en fonction de l'état de cette checkbox.
  - Utiliser la directive **v-on** pour suivre l'évènement **click** sur le bouton checkbox. Cette directive fera appel à une fonction de verification  **check(index)** qui prendra en paramètre l'index de la tâche dans la liste de tâches.
  - La fonction  **check(index)** émetra au composant parent TodoCard un évènement personnalisé nommé **check** qui renverra l'index de la tâche.
  - Écouter l'évènement **check** au niveau du composant TodoCard. Définir et appeler la fonction **checkTask(index)** pour modifier la valeur du statut (rattaché à chaque élément de liste et définit au **6.**) de true à false et vice versa chaque fois que le bouton est cliqué.
  
 
 À ce niveau, notre application est quasiment terminée, il ne nous reste plus qu'à gérer la suppression des éléments de la liste au moment du click sur le bouton supprimer. Nous allons appliquer la meme logique que celle utilisée au **10.** 

![Screenshot 2021-03-02 at 17 38 55](https://user-images.githubusercontent.com/26479837/109681944-42199280-7b7e-11eb-8ee8-be55602b0420.png)


### 11. Gérer la suppression d'un élément de la liste de tâches
- Utiliser la directive **v-on** pour écouter l'évènement **click** du bouton supprimer dans le composant TodoList. Cette directive fera appel à la fonction **remover(index)** qui prend l'index de la tâche en paramètre.
- La fonction  remover(index) émettra au composant parent TodoCard un évènement personnalisé nommé **remover** qui renverra l'index de la tâche.
- Écouter l'évènement remover au niveau du composant TodoCard. Définir et appeler la fonction **removeTask(index)** qui supprimera la tâche de la liste à l'aide de la fonction **splice()** .

Voilà notre TodoList est prête et fonctionnel! 

![gid-demo-todolist](https://user-images.githubusercontent.com/26479837/109683428-a0934080-7b7f-11eb-869d-c092da555765.gif)


## Pour aller plus loin:
- Gestion du singulier/pluriel sur le compteur de tâches.
- Permettre de supprimer toutes les tâches.
- Permettre de supprimer toutes les tâches terminées.
- Permettre de permuter les éléments de la liste.
- Rajouter une animation lors de l'ajout oû suppression de données.

