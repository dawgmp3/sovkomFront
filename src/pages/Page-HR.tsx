import React, {useEffect, useState} from 'react';
import '../styles/Page-HR.css'
import {
    IonBadge, IonButton,
    IonButtons,
    IonCard, IonCardContent, IonCol,
    IonContent, IonFab, IonFabButton, IonGrid,
    IonHeader, IonIcon, IonItem, IonLabel,
    IonMenuButton, IonMenuToggle,
    IonPage, IonRow, IonSearchbar, IonThumbnail,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import PopupMenu from "./Popup-Menu-Candidate";

const PageHR = () => {
    const [vacancy, setVacancy] = useState<any[]>([])

    const fetchData = () => {
        fetch("http://sovkombank-cheescake-hackathon.duckdns.org/api/vacancy/allVacancies")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setVacancy(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

// function PageHR() {
    return (
        <>
            <PopupMenu/>
            <IonPage id="main-content">

                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonButtons slot="end">
                            <IonMenuToggle>
                                <IonItem lines="none" routerLink="/logout">
                                    <IonTitle>Выйти</IonTitle>
                                </IonItem>
                            </IonMenuToggle>
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
                                        <IonFabButton routerLink="/vacancy-page-for-hr" className="pic-size" style={{height: "34px", width: "34px"}}>
                                            <IonIcon icon="../images/add-outline.svg"></IonIcon>
                                        </IonFabButton>
                                    </IonFab>
                                </div>
                            </IonCol>
                            <IonCol size="12" sizeXs="12" sizeSm="12" sizeMd="12" sizeLg="12"
                                    className="vacancy-cards-list">
                                <div className="search-button">
                                    <IonSearchbar searchIcon="../images/search-outline.svg"
                                                  placeholder="Search preorders and products"></IonSearchbar>
                                </div>
                            </IonCol>
                        </IonRow>
                    </IonGrid>

                    <IonGrid style={{margin: "0px"}}>
                        <IonRow>
                            {vacancy.map(vac => (
                                <IonCol size="12" sizeXs="12" sizeSm="12" sizeMd="6" sizeLg="5" sizeXl="3"
                                        className="vacancy-cards-list" key={vac.id}>
                                    <IonCard className="vacancy-cards" style={{borderRadius: '20px'}}>
                                        <IonCardContent>
                                            <IonItem>
                                                <IonLabel style={{fontWeight: 700}}>{vac.name}</IonLabel>
                                            </IonItem>
                                            <IonItem>
                                                <IonLabel class="ion-text-wrap">{vac.description}</IonLabel>
                                            </IonItem>
                                            <IonButton routerLink="/list-candidates" expand="block" fill="clear" color="transparent">Просмотреть
                                                кандидатов</IonButton>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>)
                            )}
                        </IonRow>
                    </IonGrid>


                </IonContent>
            </IonPage>
        </>
    );
}

export default PageHR;