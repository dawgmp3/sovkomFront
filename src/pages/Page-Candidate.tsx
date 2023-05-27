import React from 'react';
import '../styles/Popup-Menu-Style.css'
import '../styles/Page-Candidate.css'
import {
    IonBadge, IonButton,
    IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol,
    IonContent, IonGrid,
    IonHeader,
    IonItem, IonLabel, IonList,
    IonMenuButton, IonMenuToggle,
    IonPage, IonRadio, IonRadioGroup, IonRow, IonThumbnail,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import PopupMenuCandidate from "./Popup-Menu-Candidate";

function PageCandidate() {

    const [checked, setChecked] = React.useState("");
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.value);
    };
    console.log(checked);


    return (
        <>
            <PopupMenuCandidate/>
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
                        <IonTitle>Личные Данные</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent>
                    <div className="candidate-data">
                        <IonThumbnail className="candidate-image-thumbnail">
                            <img className="candidate-image" alt="Silhouette of mountains"
                                 src="https://ionicframework.com/docs/img/demos/thumbnail.svg"/>
                        </IonThumbnail>
                        <div className="candidate-card">
                            <IonCard className="ion-no-margin" style={{borderRadius: '20px'}}>
                                <IonCardHeader>
                                    <IonCardTitle>Вася Пупкин</IonCardTitle>
                                    <IonCardSubtitle>Информация:</IonCardSubtitle>
                                </IonCardHeader>
                                <IonList no-lines>
                                    <IonItem lines="none">
                                        <IonItem slot="start" className="email-description-card">Почта</IonItem>
                                        <IonItem slot="end">yavrotyebalVerstku.@mail.ru</IonItem>
                                    </IonItem>
                                    <IonItem lines="none">
                                        <IonItem slot="start" className="phone-description-card">Телефон</IonItem>
                                        <IonItem slot="end">8 800 555 35 35</IonItem>
                                    </IonItem>
                                </IonList>
                            </IonCard>
                        </div>
                    </div>

                    <div className="response-vacancy-header">
                        <h1>Отклики</h1>
                    </div>

                    <IonGrid style={{margin: "10px"}}>
                        <IonRow style={{marginLeft: "0px"}}>
                            <IonCol size="12" sizeXs="12" sizeSm="12" sizeMd="6" sizeLg="5" sizeXl="3"
                                    className="vacancy-cards-list">
                                <IonCard className="vacancy-cards" style={{borderRadius: '20px'}}>
                                    <IonCardHeader>
                                        <IonCardTitle style={{fontWeight: 600}}>Backend разработчик Java</IonCardTitle>
                                    </IonCardHeader>
                                    <IonList no-lines>
                                        <IonItem lines="none">
                                            <IonItem>
                                                <IonLabel>Дата подачи:</IonLabel>
                                                <IonItem lines="none" slot="end">11.11.11</IonItem>
                                            </IonItem>
                                        </IonItem>
                                        <IonItem lines="none">
                                            <IonItem lines="none" slot="start">Статус:</IonItem>
                                            <IonBadge slot="start"  color="primary">На рассмотрении</IonBadge>
                                        </IonItem>
                                    </IonList>
                                    <IonItem></IonItem>
                                </IonCard>
                            </IonCol>
                            <IonCol size="12" sizeXs="12" sizeSm="12" sizeMd="6" sizeLg="5" sizeXl="3"
                                    className="vacancy-cards-list">
                                <IonCard className="vacancy-cards" style={{borderRadius: '20px'}}>
                                    <IonCardHeader>
                                        <IonCardTitle style={{fontWeight: 600}}>Backend разработчик C#</IonCardTitle>
                                    </IonCardHeader>
                                    <IonList no-lines>
                                        <IonItem lines="none">
                                            <IonItem>
                                                <IonLabel>Дата подачи:</IonLabel>
                                                <IonItem lines="none" slot="end">11.11.11</IonItem>
                                            </IonItem>
                                        </IonItem>
                                        <IonItem lines="none">
                                            <IonItem lines="none" slot="start">Статус:</IonItem>
                                            <IonBadge slot="start" color="danger">Отказ</IonBadge>
                                        </IonItem>
                                    </IonList>
                                    <IonItem></IonItem>
                                </IonCard>
                            </IonCol>
                            <IonCol size="12" sizeXs="12" sizeSm="12" sizeMd="6" sizeLg="5" sizeXl="3"
                                    className="vacancy-cards-list">
                                <IonCard className="vacancy-cards" style={{borderRadius: '20px'}}>
                                    <IonCardHeader>
                                        <IonCardTitle style={{fontWeight: 600}}>Backend разработчик Жопой</IonCardTitle>
                                    </IonCardHeader>
                                    <IonList>
                                        <IonItem lines="none">
                                            <IonItem>
                                                <IonLabel>Дата подачи:</IonLabel>
                                                <IonItem lines="none" slot="end">11.11.11</IonItem>
                                            </IonItem>
                                        </IonItem>
                                        <IonItem lines="none">
                                            <IonItem lines="none" slot="start">Статус:</IonItem>
                                            <IonBadge slot="start" color="success">Одобрена</IonBadge>
                                        </IonItem>
                                        <IonButton routerLink="/candidate-tasks" expand="block" fill="clear" color="transparent">Перейти к заданиям</IonButton>
                                    </IonList>
                                </IonCard>
                            </IonCol>
                        </IonRow>
                    </IonGrid>


                    <div className="response-vacancy-header">
                        <h1>Вакансии</h1>
                    </div>

                    <IonGrid style={{margin: "10px"}}>
                        <IonRow style={{margin: "0px"}}>
                            <IonCol size="12" sizeXs="12" sizeSm="12" sizeMd="6" sizeLg="5" sizeXl="3"
                                    className="vacancy-cards-list">
                                <IonCard className="vacancy-cards" style={{borderRadius: '20px'}}>
                                    <IonCardHeader>
                                        <IonCardTitle style={{fontWeight: 600}}>Backend-Разработчик C#</IonCardTitle>
                                    </IonCardHeader>
                                    <IonItem>
                                        <IonLabel>Краткое описание</IonLabel>
                                    </IonItem>
                                    <IonButton expand="block" fill="clear" color="transparent">Просмотреть</IonButton>
                                </IonCard>
                            </IonCol>
                            <IonCol size="12" sizeXs="12" sizeSm="12" sizeMd="6" sizeLg="5" sizeXl="3"
                                    className="vacancy-cards-list">
                                <IonCard className="vacancy-cards" style={{borderRadius: '20px'}}>
                                    <IonCardHeader>
                                        <IonCardTitle style={{fontWeight: 600}}>Backend-Разработчик C#</IonCardTitle>
                                    </IonCardHeader>
                                    <IonItem>
                                        <IonLabel>Краткое описание</IonLabel>
                                    </IonItem>
                                    <IonButton expand="block" fill="clear" color="transparent">Просмотреть</IonButton>
                                </IonCard>
                            </IonCol>
                            <IonCol size="12" sizeXs="12" sizeSm="12" sizeMd="6" sizeLg="5" sizeXl="3"
                                    className="vacancy-cards-list">
                                <IonCard className="vacancy-cards" style={{borderRadius: '20px'}}>
                                    <IonCardHeader>
                                        <IonCardTitle style={{fontWeight: 600}}>Backend-Разработчик C#</IonCardTitle>
                                    </IonCardHeader>
                                    <IonItem>
                                        <IonLabel>Краткое описание</IonLabel>
                                    </IonItem>
                                    <IonButton expand="block" fill="clear" color="transparent">Просмотреть</IonButton>
                                </IonCard>
                            </IonCol>
                            <IonCol size="12" sizeXs="12" sizeSm="12" sizeMd="6" sizeLg="5" sizeXl="3"
                                    className="vacancy-cards-list">
                                <IonCard className="vacancy-cards" style={{borderRadius: '20px'}}>
                                    <IonCardHeader>
                                        <IonCardTitle style={{fontWeight: 600}}>Backend-Разработчик C#</IonCardTitle>
                                    </IonCardHeader>
                                    <IonItem>
                                        <IonLabel>Краткое описание</IonLabel>
                                    </IonItem>
                                    <IonButton expand="block" fill="clear" color="transparent">Просмотреть
                                        кандидатов</IonButton>
                                </IonCard>
                            </IonCol>
                            <IonCol size="12" sizeXs="12" sizeSm="12" sizeMd="6" sizeLg="5" sizeXl="3"
                                    className="vacancy-cards-list">
                                <IonCard className="vacancy-cards" style={{borderRadius: '20px'}}>
                                    <IonCardHeader>
                                        <IonCardTitle style={{fontWeight: 600}}>Backend-Разработчик C#</IonCardTitle>
                                    </IonCardHeader>
                                    <IonItem>
                                        <IonLabel>Краткое описание</IonLabel>
                                    </IonItem>
                                    <IonButton expand="block" fill="clear" color="transparent">Просмотреть</IonButton>
                                </IonCard>
                            </IonCol>
                            <IonCol size="12" sizeXs="12" sizeSm="12" sizeMd="6" sizeLg="5" sizeXl="3"
                                    className="vacancy-cards-list">
                                <IonCard className="vacancy-cards" style={{borderRadius: '20px'}}>
                                    <IonCardHeader>
                                        <IonCardTitle style={{fontWeight: 600}}>Backend-Разработчик C#</IonCardTitle>
                                    </IonCardHeader>
                                    <IonItem>
                                        <IonLabel>Краткое описание</IonLabel>
                                    </IonItem>
                                    <IonButton expand="block" fill="clear" color="transparent">Просмотреть</IonButton>
                                </IonCard>
                            </IonCol>
                            <IonCol size="12" sizeXs="12" sizeSm="12" sizeMd="6" sizeLg="5" sizeXl="3"
                                    className="vacancy-cards-list">
                                <IonCard className="vacancy-cards" style={{borderRadius: '20px'}}>
                                    <IonCardHeader>
                                        <IonCardTitle style={{fontWeight: 600}}>Backend-Разработчик C#</IonCardTitle>
                                    </IonCardHeader>
                                    <IonItem>
                                        <IonLabel>Краткое описание</IonLabel>
                                    </IonItem>
                                    <IonButton expand="block" fill="clear" color="transparent">Просмотреть</IonButton>
                                </IonCard>
                            </IonCol>
                        </IonRow>
                    </IonGrid>

                </IonContent>
            </IonPage>
        </>
    );
}

export default PageCandidate;