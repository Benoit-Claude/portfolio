<template>
    
    <div class="bloc-modale" v-if="revele">

        <div class="overlay" v-on:click="toggleModale"></div>

        <div class="modale">
            <div v-on:click="toggleModale" class="btn-modale"><img src="../../static/img/croix.png" alt="fermer"></div>
            <div class="titrem">         
                <h2>Le Lycée</h2>
                <h3>2015-2018</h3>
            </div>  
            <img src="../../static/img/stemarie.png" alt="" class="imgm">
            <p>J'ai passé mes années de lycée dans un pensionnat en Bretagne. 
                Ces années m'ont permis de me développer dans différents domaines. Ils m'ont aussi permis de comprendre la vie, d'apprendre à réfléchir par moi-même et de devenir autonome.  </p>
            <div class="diplome">
                <h2>Diplôme obtenu</h2>
                <p>Baccalauréat littéraire, mention assez bien </p>
            </div>
        </div>
    </div>



</template>

<script>

export default {
    name: 'Modale',
    props: ['revele', 'toggleModale']

}
</script>

<style scoped>

    .bloc-modale{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .overlay{
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

    .modale{
        background: #f1f1f1;
        color: #333;
        padding: 50px;
        position: fixed;
        top: 10%;
        width: 80%;
    }

    .btn-modale{
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
    }

    .btn-modale img{
        width: 20px;
    }

    .imgm{
        float: right;
        padding: 20px;
    }

    .titrem{
        display: flex;
    }

    .titrem h2{
        padding-right: 50px;
    }

    @media (max-width: 700px) {
        .imgm{
            width: 200px;
        }
        .modale{
            width: 100%;
        }
    }

</style>
