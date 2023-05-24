import React from 'react';
import './Home.css';
import '../styles/Page-HR.css'
import {
    IonBadge, IonButton,
    IonButtons,
    IonCard, IonCardContent, IonCol,
    IonContent, IonFab, IonFabButton, IonGrid,
    IonHeader, IonIcon, IonItem, IonLabel,
    IonMenuButton,
    IonPage, IonRow, IonSearchbar, IonThumbnail,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import PopupMenu from "./Popup-Menu-Candidate";

function PageHR() {
    return (
        <>
            <PopupMenu/>
            <IonPage id="main-content">

                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle>Главная страница</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent className="ion-padding">

                    <h1>Статистика по вакансиям</h1>

                    <IonGrid fixed={true} style={{margin: "0px"}}>
                        <IonRow style={{margin: "0px"}}>
                            <IonCol size="12" sizeXs="12" sizeSm="12" sizeMd="12" sizeLg="4"
                                    className="vacancy-cards-list">
                                <IonCard className="vacancy-cards" style={{borderRadius: '20px'}}>
                                    <IonCardContent>
                                        <IonItem>
                                            <IonThumbnail slot="start">
                                                <img alt="Silhouette of mountains"
                                                     src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
                                                     style={{borderRadius: '16px'}}/>
                                            </IonThumbnail>
                                            <IonLabel>Орлова Софья</IonLabel>
                                        </IonItem>

                                        <IonItem routerLink="/">
                                            <IonBadge slot="start">11</IonBadge>
                                            <IonLabel>Активных вакансий</IonLabel>
                                        </IonItem>

                                        <IonItem routerLink="/">
                                            <IonBadge slot="start">11</IonBadge>
                                            <IonLabel>Новых заявок</IonLabel>
                                        </IonItem>

                                        <IonItem routerLink="/">
                                            <IonBadge slot="start">11</IonBadge>
                                            <IonLabel>Кандидатов в обработке</IonLabel>
                                        </IonItem>

                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                        </IonRow>
                    </IonGrid>

                    <IonGrid fixed={true} style={{margin: "0px"}}>
                        <IonRow style={{margin: "0px"}} className="search-and-vacansii">
                            <IonCol size="12" sizeXs="5" sizeSm="12" sizeMd="12" sizeLg="2">
                                <h1>Вакансия</h1>
                            </IonCol>
                            <IonCol size="12" sizeXs="7" sizeSm="12" sizeMd="12" sizeLg="4"
                                    className="vacancy-cards-list">
                                <div className="hr-card-vacansii-plus_button" style={{marginBottom: "20px"}}>
                                    <IonFab>
                                        <IonFabButton className="pic-size">
                                            <IonIcon icon="src/icons/add-outline.svg"></IonIcon>
                                        </IonFabButton>
                                    </IonFab>
                                </div>
                            </IonCol>
                            <IonCol size="12" sizeXs="12" sizeSm="12" sizeMd="12" sizeLg="12"
                                    className="vacancy-cards-list">
                                <div className="search-button">
                                    <IonSearchbar searchIcon="src/icons/search-outline.svg"
                                                  placeholder="Search preorders and products"></IonSearchbar>
                                </div>
                            </IonCol>
                        </IonRow>
                    </IonGrid>

                    <IonGrid style={{margin: "0px"}}>
                        <IonRow>
                            <IonCol size="12" sizeXs="12" sizeSm="12" sizeMd="6" sizeLg="5" sizeXl="3"
                                    className="vacancy-cards-list">
                                <IonCard className="vacancy-cards" style={{borderRadius: '20px'}}>
                                    <IonCardContent>
                                        <IonItem>
                                            <IonLabel style={{fontWeight: 700}}>Backend-разработчик на C#</IonLabel>
                                        </IonItem>

                                        <IonItem>
                                            <IonLabel>Краткое описание</IonLabel>
                                        </IonItem>
                                        <IonButton expand="block" fill="clear" color="transparent">Просмотреть
                                            кандидатов</IonButton>
                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                            <IonCol size="12" sizeXs="12" sizeSm="12" sizeMd="6" sizeLg="5" sizeXl="3"
                                    className="vacancy-cards-list">
                                <IonCard className="vacancy-cards" style={{borderRadius: '20px'}}>
                                    <IonCardContent>
                                        <IonItem>
                                            <IonLabel style={{fontWeight: 700}}>Backend-разработчик на C#</IonLabel>
                                        </IonItem>

                                        <IonItem>
                                            <IonLabel>Краткое описание</IonLabel>
                                        </IonItem>
                                        <IonButton expand="block" fill="clear" color="transparent">Просмотреть
                                            кандидатов</IonButton>
                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                            <IonCol size="12" sizeXs="12" sizeSm="12" sizeMd="6" sizeLg="5" sizeXl="3"
                                    className="vacancy-cards-list">
                                <IonCard className="vacancy-cards" style={{borderRadius: '20px'}}>
                                    <IonCardContent>
                                        <IonItem>
                                            <IonLabel style={{fontWeight: 700}}>Backend-разработчик на C#</IonLabel>
                                        </IonItem>

                                        <IonItem>
                                            <IonLabel>Краткое описание</IonLabel>
                                        </IonItem>
                                        <IonButton expand="block" fill="clear" color="transparent">Просмотреть
                                            кандидатов</IonButton>
                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                            <IonCol size="12" sizeXs="12" sizeSm="12" sizeMd="6" sizeLg="5" sizeXl="3"
                                    className="vacancy-cards-list">

                                <IonCard className="vacancy-cards" style={{borderRadius: '20px'}}>
                                    <IonCardContent>
                                        <IonItem>
                                            <IonLabel style={{fontWeight: 700}}>Backend-разработчик на C#</IonLabel>
                                        </IonItem>

                                        <IonItem>
                                            <IonLabel>Краткое описание</IonLabel>
                                        </IonItem>
                                        <IonButton expand="block" fill="clear" color="transparent">Просмотреть
                                            кандидатов</IonButton>
                                    </IonCardContent>
                                </IonCard>

                            </IonCol>

                            <IonCol size="12" sizeXs="12" sizeSm="12" sizeMd="6" sizeLg="5" sizeXl="3"
                                    className="vacancy-cards-list">

                                <IonCard className="vacancy-cards" style={{borderRadius: '20px'}}>
                                    <IonCardContent>
                                        <IonItem>
                                            <IonLabel style={{fontWeight: 700}}>Backend-разработчик на C#</IonLabel>
                                        </IonItem>

                                        <IonItem>
                                            <IonLabel>Краткое описание</IonLabel>
                                        </IonItem>
                                        <IonButton expand="block" fill="clear" color="transparent">Просмотреть
                                            кандидатов</IonButton>
                                    </IonCardContent>
                                </IonCard>

                            </IonCol>

                            <IonCol size="12" sizeXs="12" sizeSm="12" sizeMd="6" sizeLg="5" sizeXl="3"
                                    className="vacancy-cards-list">

                                <IonCard className="vacancy-cards" style={{borderRadius: '20px'}}>
                                    <IonCardContent>
                                        <IonItem>
                                            <IonLabel style={{fontWeight: 700}}>Backend-разработчик на C#</IonLabel>
                                        </IonItem>

                                        <IonItem>
                                            <IonLabel>Краткое описание</IonLabel>
                                        </IonItem>
                                        <IonButton expand="block" fill="clear" color="transparent">Просмотреть
                                            кандидатов</IonButton>
                                    </IonCardContent>
                                </IonCard>

                            </IonCol>
                        </IonRow>
                    </IonGrid>


                </IonContent>
            </IonPage>
        </>
    );
}

export default PageHR;