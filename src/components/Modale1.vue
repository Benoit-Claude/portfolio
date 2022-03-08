<template>
    
    <div class="bloc-modale" v-if="revele1">

        <div class="overlay" v-on:click="toggleModale1"></div>

        <div class="modale">
            <div v-on:click="toggleModale1" class="btn-modale"><img src="../../static/img/croix.png" alt="fermer"></div>
            <div class="titrem">         
                <h2>Début des études</h2>
                <h3>2018-2020</h3>
            </div>  
            <img src="../../static/img/ENC-bâtiments.jpg" alt="" class="imgm">
            <p>Après le baccalauréat, j'ai eu envie de découvrir le monde de la finance et de la comptabilité, car cela m'intéressait et j'en entendait beaucoup parler. Lors de la deuxième année j'ai commencé l'alternance. Après une certaine reflexion j'ai su que ce n'était pas ma voie. J'ai donc arrété et j'ai commencé à travailler en tant que vendeur en boulangerie. </p>
            <div class="diplome">
                <h2>Expérience obtenue</h2>
                <p>Comptabilité en Cabinet et vente en boutique </p>
            </div>
        </div>
    </div>



</template>

<script>

export default {
    name: 'Modale1',
    props: ['revele1', 'toggleModale1']

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
        width: 500px;
        border-radius: 10px;
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
