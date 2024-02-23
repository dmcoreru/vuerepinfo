<script lang="ts">
import { NewsService } from '../../Services/NewsService';

interface INew {
  id: number;
  preview: string;
  title: string;
  description: string;
  badges: string[];
}

interface NewsComponentData {
  news: INew[];
}

export default {
  data(): NewsComponentData {
    return {
      news: []
    };
  },
  methods: {
    getNews() {
      NewsService.getNews().then(news => this.news = news);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.getNews();
    })
  }
};
</script>

<template>
  <div class="news">
    <div class="new" v-for="newItem in news" :key="newItem.id">
      <div class="new-preview">
        <img :src="newItem.preview" :alt="newItem.title">
      </div>
      <div class="new-body">
        <div class="title">{{ newItem.title }}</div>
        <div class="description">{{newItem.description}}</div>
        <div class="panel">
          <div class="badges">
            <div class="badge" v-for="(badge, index) in newItem.badges" :key="index">
              {{badge}}
            </div>
          </div>
          <div class="socials">
            <div class="social twitter">
              <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="40px" viewBox="0 0 97.75 97.75" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M48.875,0C21.882,0,0,21.882,0,48.875S21.882,97.75,48.875,97.75S97.75,75.868,97.75,48.875S75.868,0,48.875,0z M78.43,35.841c0.023,0.577,0.035,1.155,0.035,1.736c0,20.878-15.887,42.473-42.473,42.473c-8.127,0-16.04-2.319-22.883-6.708 c-0.143-0.091-0.202-0.268-0.145-0.427c0.057-0.158,0.218-0.256,0.383-0.237c1.148,0.137,2.322,0.205,3.487,0.205 c6.323,0,12.309-1.955,17.372-5.664c-6.069-0.512-11.285-4.619-13.161-10.478c-0.039-0.122-0.011-0.255,0.073-0.351 c0.085-0.096,0.215-0.138,0.339-0.115c1.682,0.319,3.392,0.34,5.04,0.072c-6.259-1.945-10.658-7.808-10.658-14.483l0.002-0.194 c0.003-0.127,0.072-0.243,0.182-0.306c0.109-0.064,0.245-0.065,0.355-0.003c1.632,0.906,3.438,1.488,5.291,1.711 c-3.597-2.867-5.709-7.213-5.709-11.862c0-2.682,0.71-5.318,2.054-7.623c0.06-0.103,0.166-0.169,0.284-0.178 c0.119-0.012,0.234,0.04,0.309,0.132c7.362,9.03,18.191,14.59,29.771,15.305c-0.193-0.972-0.291-1.974-0.291-2.985 c0-8.361,6.802-15.162,15.162-15.162c4.11,0,8.082,1.689,10.929,4.641c3.209-0.654,6.266-1.834,9.09-3.508 c0.129-0.077,0.291-0.065,0.41,0.028c0.116,0.094,0.164,0.25,0.118,0.394c-0.957,2.993-2.823,5.604-5.33,7.489 c2.361-0.411,4.652-1.105,6.831-2.072c0.146-0.067,0.319-0.025,0.424,0.098c0.104,0.124,0.113,0.301,0.023,0.435 C83.759,31.175,81.299,33.744,78.43,35.841z"></path> </g> </g></svg>
            </div>
            <div class="social facebook">
              <svg fill="#000000" height="40px" width="40px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M169.5,357.6l-2.9,38.3h-39.3 v133H77.7v-133H51.2v-38.3h26.5v-25.7c0-11.3,0.3-28.8,8.5-39.7c8.7-11.5,20.6-19.3,41.1-19.3c33.4,0,47.4,4.8,47.4,4.8l-6.6,39.2 c0,0-11-3.2-21.3-3.2c-10.3,0-19.5,3.7-19.5,14v29.9H169.5z"></path> </g></svg>
            </div>
            <div class="social google">
              <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM21 12C21 16.9706 16.9706 21 12 21C11.8075 21 11.6164 20.994 11.4268 20.982L15.3516 14.1842C15.7616 13.5562 16 12.806 16 12C16 11.2714 15.8052 10.5883 15.4649 10H20.777C20.9229 10.6432 21 11.3126 21 12ZM3 12C3 16.0439 5.66703 19.4648 9.33808 20.5998L11.9938 16C10.4369 15.9976 9.08858 15.1058 8.4297 13.8055L4.5075 7.01205C3.55514 8.43975 3 10.155 3 12ZM5.88442 5.39694C7.48983 3.90934 9.63872 3 12 3C15.5337 3 18.5918 5.03656 20.0645 8H12C10.5219 8 9.23103 8.80174 8.53857 9.99407L5.88442 5.39694ZM10.2633 12.9925L10.2681 12.9897L10.1968 12.8662C10.0707 12.6041 10 12.3103 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 12.361 13.9043 12.6997 13.737 12.9921L13.7321 12.9893L13.6529 13.1263C13.2928 13.6538 12.6868 14 12 14C11.2566 14 10.608 13.5945 10.2633 12.9925Z" fill="#0F0F0F"></path> </g></svg>
            </div>
            <div class="social vk">
              <svg fill="#000000" width="64px" height="64px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zm3.692 10.831s.849.838 1.058 1.227c.006.008.009.016.011.02.085.143.105.254.063.337-.07.138-.31.206-.392.212h-1.5c-.104 0-.322-.027-.586-.209-.203-.142-.403-.375-.598-.602-.291-.338-.543-.63-.797-.63a.305.305 0 0 0-.095.015c-.192.062-.438.336-.438 1.066 0 .228-.18.359-.307.359h-.687c-.234 0-1.453-.082-2.533-1.221-1.322-1.395-2.512-4.193-2.522-4.219-.075-.181.08-.278.249-.278h1.515c.202 0 .268.123.314.232.054.127.252.632.577 1.2.527.926.85 1.302 1.109 1.302a.3.3 0 0 0 .139-.036c.338-.188.275-1.393.26-1.643 0-.047-.001-.539-.174-.775-.124-.171-.335-.236-.463-.26a.55.55 0 0 1 .199-.169c.232-.116.65-.133 1.065-.133h.231c.45.006.566.035.729.076.33.079.337.292.308 1.021-.009.207-.018.441-.018.717 0 .06-.003.124-.003.192-.01.371-.022.792.24.965a.216.216 0 0 0 .114.033c.091 0 .365 0 1.107-1.273a9.718 9.718 0 0 0 .595-1.274c.015-.026.059-.106.111-.137a.266.266 0 0 1 .124-.029h1.781c.194 0 .327.029.352.104.044.119-.008.482-.821 1.583l-.363.479c-.737.966-.737 1.015.046 1.748z"></path></g></svg>
            </div>
            <div class="social telegram">
              <svg fill="#000000" width="64px" height="64px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>telegram</title> <path d="M22.122 10.040c0.006-0 0.014-0 0.022-0 0.209 0 0.403 0.065 0.562 0.177l-0.003-0.002c0.116 0.101 0.194 0.243 0.213 0.403l0 0.003c0.020 0.122 0.031 0.262 0.031 0.405 0 0.065-0.002 0.129-0.007 0.193l0-0.009c-0.225 2.369-1.201 8.114-1.697 10.766-0.21 1.123-0.623 1.499-1.023 1.535-0.869 0.081-1.529-0.574-2.371-1.126-1.318-0.865-2.063-1.403-3.342-2.246-1.479-0.973-0.52-1.51 0.322-2.384 0.221-0.23 4.052-3.715 4.127-4.031 0.004-0.019 0.006-0.040 0.006-0.062 0-0.078-0.029-0.149-0.076-0.203l0 0c-0.052-0.034-0.117-0.053-0.185-0.053-0.045 0-0.088 0.009-0.128 0.024l0.002-0.001q-0.198 0.045-6.316 4.174c-0.445 0.351-1.007 0.573-1.619 0.599l-0.006 0c-0.867-0.105-1.654-0.298-2.401-0.573l0.074 0.024c-0.938-0.306-1.683-0.467-1.619-0.985q0.051-0.404 1.114-0.827 6.548-2.853 8.733-3.761c1.607-0.853 3.47-1.555 5.429-2.010l0.157-0.031zM15.93 1.025c-8.302 0.020-15.025 6.755-15.025 15.060 0 8.317 6.742 15.060 15.060 15.060s15.060-6.742 15.060-15.060c0-8.305-6.723-15.040-15.023-15.060h-0.002q-0.035-0-0.070 0z"></path> </g></svg>
            </div>
          </div>
          <div class="actions">
            <button class="btn">Read more</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .news {
    width: 100%;
    margin: 24px 0;
  }

  .new {
    margin: 0 auto 48px;
    width: 90%;
    border: 1px solid #eee;
    box-shadow: 0 12px 10px #eeeeee;
    background-color: #fff;
  }

  .new-preview {
    &>img {
      width: 100%;
      height: auto;
    }
  }

  .new-body {
    padding: 12px 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .title {
    font-size: 2rem;
    margin-bottom: 12px;
  }

  .description {
    font-size: 1.2rem;
  }

  .badges {
    display: inline-flex;
  }

  .panel {
    display: flex;
    justify-content: space-between;
  }

  .badge {
    display: flex;
    align-items: center;
    border-radius: 30px;
    background-color: rgba(0,0,0,.75);
    color: #fff;
    padding: 4px 8px;
  }

  .btn {
    text-transform: uppercase;
    border-radius: 4px;
    color: #fff;
    background-color: deepskyblue;
    padding: 8px;
  }

  .socials {
    display: flex;
    gap: 8px;
  }

  .social {
    width: 40px;
    height: 40px;
    & > svg {
      width: inherit;
      height: inherit;
    }
  }
</style>
