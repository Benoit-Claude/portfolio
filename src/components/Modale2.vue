<template>
    
    <div class="bloc-modale" v-if="revele2">

        <div class="overlay" v-on:click="toggleModale2"></div>

        <div class="modale">
            <div v-on:click="toggleModale2" class="btn-modale"><img src="../../static/img/croix.png" alt="fermer"></div>
            <div class="titrem">         
                <h2>Le DUT MMI</h2>
                <h3>2020-2022</h3>
            </div>  
            <img src="../../static/img/mmibat.jpg" alt="" class="imgm">
            <p>Finalement j'ai trouvé la formation qui me convient. Le DUT MMI m'a offert une formation complète dans les domaines qui me passionnent vraiment. J'ai pu y réaliser divers projets qui m'ont grandement passionné et j'y ai acquis des compétences qui me seront utiles dans ma vie professionnelle </p>
            <div class="diplome">
                <h2>Diplôme/Expérience obtenue</h2>
                <p>DUT MMI </p>
                <p>Compétences en Développement Web, Communication et Design</p>
            </div>
        </div>
    </div>



</template>

<script>

export default {
    name: 'Modale2',
    props: ['revele2', 'toggleModale2']

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
