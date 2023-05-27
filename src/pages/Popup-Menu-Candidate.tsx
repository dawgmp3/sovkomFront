import React from 'react';
import '../styles/Popup-Menu-Style.css'
import {
    IonBadge,
    IonButtons,
    IonContent,
    IonHeader, IonIcon,
    IonItem, IonLabel, IonList,
    IonMenu,
    IonMenuButton, IonMenuToggle,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';

function PopupMenuCandidate() {
    return (
        <>
            <IonMenu contentId="main-content">
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Платформа</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-no-padding">
                    <IonList>
                        <IonMenuToggle>
                            <IonItem routerLink="/home">
                                <IonIcon src="./images/pulse-outline.svg" slot="start"></IonIcon>
                                <IonLabel>Главная страничка</IonLabel>
                            </IonItem>
                        </IonMenuToggle>
                        <IonMenuToggle>
                            <IonItem routerLink="/">
                                <IonIcon src="./images/ice-cream-outline.svg" slot="start"></IonIcon>
                                <IonLabel>Все вакансии</IonLabel>
                            </IonItem>
                        </IonMenuToggle>
                        <IonMenuToggle>
                            <IonItem routerLink="/candidate-tasks">
                                <IonIcon src="./images/calendar-number-outline.svg" slot="start"></IonIcon>
                                <IonLabel>Мои задания</IonLabel>
                            </IonItem>
                        </IonMenuToggle>
                        <IonItem className="ion-padding-top">
                            <IonLabel className="ion-padding-top">Дополнительно</IonLabel>
                        </IonItem>
                        <IonMenuToggle>
                            <IonItem routerLink="/">
                                <IonIcon src="./images/terminal-outline.svg" slot="start"></IonIcon>
                                <IonLabel>Статистика</IonLabel>
                            </IonItem>
                        </IonMenuToggle>
                    </IonList>
                </IonContent>
            </IonMenu>
            {/*<IonPage id="main-content">*/}
            {/*    <IonHeader>*/}
            {/*        <IonToolbar>*/}
            {/*            <IonButtons slot="start">*/}
            {/*                <IonMenuButton></IonMenuButton>*/}
            {/*            </IonButtons>*/}
            {/*            <IonTitle>Menu</IonTitle>*/}
            {/*        </IonToolbar>*/}
            {/*    </IonHeader>*/}
            {/*    /!*<IonContent className="ion-padding">тут отрисовка говна</IonContent>*!/*/}
            {/*</IonPage>*/}
        </>
    );
}

export default PopupMenuCandidate;