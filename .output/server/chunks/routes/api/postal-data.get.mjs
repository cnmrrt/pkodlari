import { d as defineCachedEventHandler } from '../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const postalData_get = defineCachedEventHandler(async (event) => {
  const data = [
    { "il": "Adana", "ilce": "Alada\u011F", "mahalle": "Akp\u0131nar Mahallesi", "postaKodu": "01720", "semt": "Alada\u011F" },
    { "il": "Adana", "ilce": "Alada\u011F", "mahalle": "Ba\u015Fp\u0131nar Mahallesi", "postaKodu": "01720", "semt": "Alada\u011F" },
    { "il": "Adana", "ilce": "Alada\u011F", "mahalle": "Mansurlu Mahallesi", "postaKodu": "01720", "semt": "Alada\u011F" },
    { "il": "Adana", "ilce": "Alada\u011F", "mahalle": "Sinanpa\u015Fa Mahallesi", "postaKodu": "01720", "semt": "Alada\u011F" },
    {
      "il": "Adana",
      "ilce": "Alada\u011F",
      "mahalle": "Ak\xF6ren Mahallesi",
      "postaKodu": "01722",
      "semt": "Madenli"
    },
    {
      "il": "Adana",
      "ilce": "Alada\u011F",
      "mahalle": "Boztahta Mahallesi",
      "postaKodu": "01722",
      "semt": "Madenli"
    },
    {
      "il": "Adana",
      "ilce": "Alada\u011F",
      "mahalle": "B\xFCy\xFCksofulu Mahallesi",
      "postaKodu": "01722",
      "semt": "Madenli"
    },
    {
      "il": "Adana",
      "ilce": "Alada\u011F",
      "mahalle": "Ceritler Mahallesi",
      "postaKodu": "01722",
      "semt": "Madenli"
    },
    {
      "il": "Adana",
      "ilce": "Alada\u011F",
      "mahalle": "Dailer Mahallesi",
      "postaKodu": "01722",
      "semt": "Madenli"
    },
    {
      "il": "Adana",
      "ilce": "Alada\u011F",
      "mahalle": "Dar\u0131l\u0131k Mahallesi",
      "postaKodu": "01722",
      "semt": "Madenli"
    },
    {
      "il": "Adana",
      "ilce": "Alada\u011F",
      "mahalle": "D\xF6lekli Mahallesi",
      "postaKodu": "01722",
      "semt": "Madenli"
    },
    {
      "il": "Adana",
      "ilce": "Alada\u011F",
      "mahalle": "Ebrim Mahallesi",
      "postaKodu": "01722",
      "semt": "Madenli"
    },
    {
      "il": "Adana",
      "ilce": "Alada\u011F",
      "mahalle": "E\u011Fner Mahallesi",
      "postaKodu": "01722",
      "semt": "Madenli"
    },
    {
      "il": "Adana",
      "ilce": "Alada\u011F",
      "mahalle": "Gerdibi Mahallesi",
      "postaKodu": "01722",
      "semt": "Madenli"
    },
    {
      "il": "Adana",
      "ilce": "Alada\u011F",
      "mahalle": "Gire\u011Fiyenik\xF6y Mahallesi",
      "postaKodu": "01722",
      "semt": "Madenli"
    },
    {
      "il": "Adana",
      "ilce": "Alada\u011F",
      "mahalle": "G\xF6k\xE7ek\xF6y Mahallesi",
      "postaKodu": "01722",
      "semt": "Madenli"
    },
    {
      "il": "Adana",
      "ilce": "Alada\u011F",
      "mahalle": "Kabasakal Mahallesi",
      "postaKodu": "01722",
      "semt": "Madenli"
    },
    {
      "il": "Adana",
      "ilce": "Alada\u011F",
      "mahalle": "Karahan Mahallesi",
      "postaKodu": "01722",
      "semt": "Madenli"
    },
    {
      "il": "Adana",
      "ilce": "Alada\u011F",
      "mahalle": "K\u0131cak Mahallesi",
      "postaKodu": "01722",
      "semt": "Madenli"
    },
    {
      "il": "Adana",
      "ilce": "Alada\u011F",
      "mahalle": "K\u0131\u015Flak Mahallesi",
      "postaKodu": "01722",
      "semt": "Madenli"
    },
    {
      "il": "Adana",
      "ilce": "Alada\u011F",
      "mahalle": "K\u0131z\u0131ldam Mahallesi",
      "postaKodu": "01722",
      "semt": "Madenli"
    },
    {
      "il": "Adana",
      "ilce": "Alada\u011F",
      "mahalle": "K\xF6kez Mahallesi",
      "postaKodu": "01722",
      "semt": "Madenli"
    },
    {
      "il": "Adana",
      "ilce": "Alada\u011F",
      "mahalle": "K\xF6pr\xFCc\xFCk Mahallesi",
      "postaKodu": "01722",
      "semt": "Madenli"
    },
    {
      "il": "Adana",
      "ilce": "Alada\u011F",
      "mahalle": "K\xFCp Mahallesi",
      "postaKodu": "01722",
      "semt": "Madenli"
    },
    {
      "il": "Adana",
      "ilce": "Alada\u011F",
      "mahalle": "Madenli Mahallesi",
      "postaKodu": "01722",
      "semt": "Madenli"
    },
    {
      "il": "Adana",
      "ilce": "Alada\u011F",
      "mahalle": "Maz\u0131l\u0131k Mahallesi",
      "postaKodu": "01722",
      "semt": "Madenli"
    },
    {
      "il": "Adana",
      "ilce": "Alada\u011F",
      "mahalle": "Posya\u011Fbasan Mahallesi",
      "postaKodu": "01722",
      "semt": "Madenli"
    },
    {
      "il": "Adana",
      "ilce": "Alada\u011F",
      "mahalle": "Topall\u0131 Mahallesi",
      "postaKodu": "01722",
      "semt": "Madenli"
    },
    {
      "il": "Adana",
      "ilce": "Alada\u011F",
      "mahalle": "Uzunkuyu Mahallesi",
      "postaKodu": "01722",
      "semt": "Madenli"
    },
    {
      "il": "Adana",
      "ilce": "Alada\u011F",
      "mahalle": "Yetimli Mahallesi",
      "postaKodu": "01722",
      "semt": "Madenli"
    },
    {
      "il": "Adana",
      "ilce": "Alada\u011F",
      "mahalle": "Y\xFCksek\xF6ren Mahallesi",
      "postaKodu": "01722",
      "semt": "Madenli"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Adap\u0131nar Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Adatepe Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "A\u011Fa\xE7l\u0131 Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "A\u011Fa\xE7p\u0131nar Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Akdamlar Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Alt\u0131g\xF6zbekirli Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Alt\u0131kara Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Alt\u0131ocak Mahallesi",
      "postaKodu": "01920",
      "semt": "Ceyhan"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Atat\xFCrk Mahallesi",
      "postaKodu": "01920",
      "semt": "Ceyhan"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Aydemiro\u011Flu Mahallesi",
      "postaKodu": "01920",
      "semt": "Ceyhan"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Ayd\u0131nlar Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Azizli Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Ba\u015F\xF6ren Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Belediye Evleri Mahallesi",
      "postaKodu": "01920",
      "semt": "Ceyhan"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Birkent Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Bota Mahallesi",
      "postaKodu": "01920",
      "semt": "Ceyhan"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Burhaniye Mahallesi",
      "postaKodu": "01920",
      "semt": "Ceyhan"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Burhanl\u0131 Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "B\xFCy\xFCkburhaniye Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "B\xFCy\xFCkk\u0131r\u0131m Mahallesi",
      "postaKodu": "01920",
      "semt": "Ceyhan"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "B\xFCy\xFCkmang\u0131t Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "\xC7akaldere Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Camuza\u011F\u0131l\u0131 Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "\xC7atakl\u0131 Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "\xC7atalh\xF6y\xFCk Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "\xC7evretepe Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Ceyhanbekirli Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "\xC7i\xE7ekli Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "\xC7iftlikler Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Civantayak Mahallesi",
      "postaKodu": "01920",
      "semt": "Ceyhan"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "\xC7ok\xE7ap\u0131nar Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Cumhuriyet Mahallesi",
      "postaKodu": "01920",
      "semt": "Ceyhan"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Da\u011F\u0131stan Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "De\u011Firmendere Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "De\u011Firmenli Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Dikilita\u015F Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Dokuztekne Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Doruk Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Durhasandede Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Dutlup\u0131nar Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Ekinyaz\u0131 Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Elmag\xF6l\xFC Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Emek Mahallesi",
      "postaKodu": "01920",
      "semt": "Ceyhan"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Erenler Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Esentepe Mahallesi",
      "postaKodu": "01920",
      "semt": "Ceyhan"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Fatih Sultan Mehmet Mahallesi",
      "postaKodu": "01920",
      "semt": "Ceyhan"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Gazi Osman Pa\u015Fa Mahallesi",
      "postaKodu": "01920",
      "semt": "Ceyhan"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "G\xFCm\xFCrd\xFCl\xFC Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "G\xFCndo\u011Fan Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "G\xFCnl\xFCce Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Hamdilli Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Hamidiye Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Hamitbey Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Hamitbeybuca\u011F\u0131 Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "H\xFCrriyet Mahallesi",
      "postaKodu": "01920",
      "semt": "Ceyhan"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "\u0130mran Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "\u0130nceyer Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "\u0130n\xF6n\xFC Mahallesi",
      "postaKodu": "01920",
      "semt": "Ceyhan"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Irmakl\u0131 Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "\u0130sal\u0131 Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Is\u0131rganl\u0131 Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "\u0130stiklal Mahallesi",
      "postaKodu": "01920",
      "semt": "Ceyhan"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Karakayal\u0131 Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Kelemeti Mahallesi",
      "postaKodu": "01920",
      "semt": "Ceyhan"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "K\u0131l\u0131\xE7kaya Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "K\u0131vr\u0131kl\u0131 Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "K\u0131z\u0131ldere Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Konako\u011Flu Mahallesi",
      "postaKodu": "01920",
      "semt": "Ceyhan"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "K\xF6pr\xFCl\xFC Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "K\xF6rkuyu Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "K\xF6r\xFCkl\xFC Mahallesi",
      "postaKodu": "01920",
      "semt": "Ceyhan"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "K\xF6sreli Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "K\xFC\xE7\xFCkburhaniye Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "K\xFC\xE7\xFCkk\u0131r\u0131m Mahallesi",
      "postaKodu": "01920",
      "semt": "Ceyhan"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "K\xFC\xE7\xFCkmang\u0131t Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Kurtkula\u011F\u0131 Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Kurtp\u0131nar Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Kuzucak Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Mercimek Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Mercin Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Mithat Pa\u015Fa Mahallesi",
      "postaKodu": "01920",
      "semt": "Ceyhan"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Modern Evler Mahallesi",
      "postaKodu": "01920",
      "semt": "Ceyhan"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Muradiye Mahallesi",
      "postaKodu": "01920",
      "semt": "Ceyhan"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Mustafabeyli Mahallesi",
      "postaKodu": "01924",
      "semt": "Mustafabeyli"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Nam\u0131k Kemal Mahallesi",
      "postaKodu": "01920",
      "semt": "Ceyhan"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Narl\u0131k Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Naz\u0131mbey Yenik\xF6y Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Sa\u011F\u0131rlar Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Sa\u011Fkaya Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "\u015Eahin \xD6zbilen Mahallesi",
      "postaKodu": "01920",
      "semt": "Ceyhan"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Sar\u0131bah\xE7e Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Sar\u0131maz\u0131 Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Sar\u0131maz\u0131 SB Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Sar\u0131 Sakal Mahallesi",
      "postaKodu": "01920",
      "semt": "Ceyhan"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "\u015Eehit Hac\u0131 \u0130brahim Mahallesi",
      "postaKodu": "01920",
      "semt": "Ceyhan"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Selimiye Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Sirkeli Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "So\u011Fukp\u0131nar Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Soysall\u0131 Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Tatarl\u0131 Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Tatl\u0131kuyu Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Toktam\u0131\u015F Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Tumlu Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "\xDC\xE7dut Ye\u015Filova Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Ulus Mahallesi",
      "postaKodu": "01920",
      "semt": "Ceyhan"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Veysiye Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Yalak Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Yarsuat Mahallesi",
      "postaKodu": "01920",
      "semt": "Ceyhan"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Yellibel Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Ye\u015Filbah\xE7e Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Ye\u015Fildam Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Y\u0131lankale Mahallesi",
      "postaKodu": "01922",
      "semt": "B\xFCy\xFCkmang\u0131t"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Z\xFCbeyde Han\u0131m Mahallesi",
      "postaKodu": "01920",
      "semt": "Ceyhan"
    },
    {
      "il": "Adana",
      "ilce": "\xC7ukurova",
      "mahalle": "Belediye Evleri Mahallesi",
      "postaKodu": "01360",
      "semt": "Huzurevleri"
    },
    {
      "il": "Adana",
      "ilce": "\xC7ukurova",
      "mahalle": "Beyazevler Mahallesi",
      "postaKodu": "01170",
      "semt": "Mahfes\u0131\u011Fmaz"
    },
    {
      "il": "Adana",
      "ilce": "\xC7ukurova",
      "mahalle": "Bozcalar Mahallesi",
      "postaKodu": "01170",
      "semt": "Mahfes\u0131\u011Fmaz"
    },
    {
      "il": "Adana",
      "ilce": "\xC7ukurova",
      "mahalle": "D\xF6rtler Mahallesi",
      "postaKodu": "01170",
      "semt": "Mahfes\u0131\u011Fmaz"
    },
    {
      "il": "Adana",
      "ilce": "\xC7ukurova",
      "mahalle": "Esentepe Mahallesi",
      "postaKodu": "01170",
      "semt": "Mahfes\u0131\u011Fmaz"
    },
    {
      "il": "Adana",
      "ilce": "\xC7ukurova",
      "mahalle": "Fad\u0131l Mahallesi",
      "postaKodu": "01170",
      "semt": "Mahfes\u0131\u011Fmaz"
    },
    {
      "il": "Adana",
      "ilce": "\xC7ukurova",
      "mahalle": "G\xF6kkuyu Mahallesi",
      "postaKodu": "01170",
      "semt": "Mahfes\u0131\u011Fmaz"
    },
    {
      "il": "Adana",
      "ilce": "\xC7ukurova",
      "mahalle": "G\xFCzelyal\u0131 Mahallesi",
      "postaKodu": "01170",
      "semt": "Mahfes\u0131\u011Fmaz"
    },
    {
      "il": "Adana",
      "ilce": "\xC7ukurova",
      "mahalle": "Huzurevleri Mahallesi",
      "postaKodu": "01360",
      "semt": "Huzurevleri"
    },
    {
      "il": "Adana",
      "ilce": "\xC7ukurova",
      "mahalle": "Kabasakal Mahallesi",
      "postaKodu": "01170",
      "semt": "Mahfes\u0131\u011Fmaz"
    },
    {
      "il": "Adana",
      "ilce": "\xC7ukurova",
      "mahalle": "Karahan Mahallesi",
      "postaKodu": "01170",
      "semt": "Mahfes\u0131\u011Fmaz"
    },
    {
      "il": "Adana",
      "ilce": "\xC7ukurova",
      "mahalle": "Karsl\u0131lar Mahallesi",
      "postaKodu": "01170",
      "semt": "Mahfes\u0131\u011Fmaz"
    },
    {
      "il": "Adana",
      "ilce": "\xC7ukurova",
      "mahalle": "Ka\u015Foba Mahallesi",
      "postaKodu": "01170",
      "semt": "Mahfes\u0131\u011Fmaz"
    },
    {
      "il": "Adana",
      "ilce": "\xC7ukurova",
      "mahalle": "Kocatepe Mahallesi",
      "postaKodu": "01170",
      "semt": "Mahfes\u0131\u011Fmaz"
    },
    {
      "il": "Adana",
      "ilce": "\xC7ukurova",
      "mahalle": "K\xFC\xE7\xFCk\xE7\u0131nar Mahallesi",
      "postaKodu": "01170",
      "semt": "Mahfes\u0131\u011Fmaz"
    },
    {
      "il": "Adana",
      "ilce": "\xC7ukurova",
      "mahalle": "Kurttepe Mahallesi",
      "postaKodu": "01170",
      "semt": "Mahfes\u0131\u011Fmaz"
    },
    {
      "il": "Adana",
      "ilce": "\xC7ukurova",
      "mahalle": "Mahfes\u0131\u011Fmaz Mahallesi",
      "postaKodu": "01170",
      "semt": "Mahfes\u0131\u011Fmaz"
    },
    {
      "il": "Adana",
      "ilce": "\xC7ukurova",
      "mahalle": "Memi\u015Fli Mahallesi",
      "postaKodu": "01170",
      "semt": "Mahfes\u0131\u011Fmaz"
    },
    {
      "il": "Adana",
      "ilce": "\xC7ukurova",
      "mahalle": "\xD6rc\xFCn Mahallesi",
      "postaKodu": "01170",
      "semt": "Mahfes\u0131\u011Fmaz"
    },
    {
      "il": "Adana",
      "ilce": "\xC7ukurova",
      "mahalle": "Pirili Mahallesi",
      "postaKodu": "01170",
      "semt": "Mahfes\u0131\u011Fmaz"
    },
    {
      "il": "Adana",
      "ilce": "\xC7ukurova",
      "mahalle": "Salba\u015F Esentepe Mahallesi",
      "postaKodu": "01780",
      "semt": "Salba\u015F"
    },
    {
      "il": "Adana",
      "ilce": "\xC7ukurova",
      "mahalle": "\u015Eambayad\u0131 Mahallesi",
      "postaKodu": "01170",
      "semt": "Mahfes\u0131\u011Fmaz"
    },
    {
      "il": "Adana",
      "ilce": "\xC7ukurova",
      "mahalle": "S\xF6\u011F\xFCtl\xFC Mahallesi",
      "postaKodu": "01170",
      "semt": "Mahfes\u0131\u011Fmaz"
    },
    {
      "il": "Adana",
      "ilce": "\xC7ukurova",
      "mahalle": "Toros Mahallesi",
      "postaKodu": "01170",
      "semt": "Mahfes\u0131\u011Fmaz"
    },
    {
      "il": "Adana",
      "ilce": "\xC7ukurova",
      "mahalle": "Yeni Mahallesi",
      "postaKodu": "01170",
      "semt": "Mahfes\u0131\u011Fmaz"
    },
    {
      "il": "Adana",
      "ilce": "\xC7ukurova",
      "mahalle": "Yurt Mahallesi",
      "postaKodu": "01170",
      "semt": "Mahfes\u0131\u011Fmaz"
    },
    {
      "il": "Adana",
      "ilce": "\xC7ukurova",
      "mahalle": "Y\xFCz\xFCnc\xFCy\u0131l Mahallesi",
      "postaKodu": "01360",
      "semt": "Huzurevleri"
    },
    {
      "il": "Adana",
      "ilce": "Feke",
      "mahalle": "Akkaya Mahallesi",
      "postaKodu": "01662",
      "semt": "Akkaya"
    },
    {
      "il": "Adana",
      "ilce": "Feke",
      "mahalle": "Akoluk Mahallesi",
      "postaKodu": "01662",
      "semt": "Akkaya"
    },
    {
      "il": "Adana",
      "ilce": "Feke",
      "mahalle": "Ba\u011Fdatl\u0131 Mahallesi",
      "postaKodu": "01662",
      "semt": "Akkaya"
    },
    {
      "il": "Adana",
      "ilce": "Feke",
      "mahalle": "Bah\xE7ecik Mahallesi",
      "postaKodu": "01662",
      "semt": "Akkaya"
    },
    {
      "il": "Adana",
      "ilce": "Feke",
      "mahalle": "Belenk\xF6y Mahallesi",
      "postaKodu": "01660",
      "semt": "Feke"
    },
    {
      "il": "Adana",
      "ilce": "Feke",
      "mahalle": "\xC7and\u0131rlar Mahallesi",
      "postaKodu": "01662",
      "semt": "Akkaya"
    },
    {
      "il": "Adana",
      "ilce": "Feke",
      "mahalle": "\xC7ondu Mahallesi",
      "postaKodu": "01662",
      "semt": "Akkaya"
    },
    {
      "il": "Adana",
      "ilce": "Feke",
      "mahalle": "\xC7\xFCr\xFCkler Mahallesi",
      "postaKodu": "01662",
      "semt": "Akkaya"
    },
    {
      "il": "Adana",
      "ilce": "Feke",
      "mahalle": "De\u011Firmenciu\u015Fa\u011F\u0131 Mahallesi",
      "postaKodu": "01662",
      "semt": "Akkaya"
    },
    {
      "il": "Adana",
      "ilce": "Feke",
      "mahalle": "Gaffaru\u015Fa\u011F\u0131 Mahallesi",
      "postaKodu": "01662",
      "semt": "Akkaya"
    },
    {
      "il": "Adana",
      "ilce": "Feke",
      "mahalle": "Gedikli Mahallesi",
      "postaKodu": "01662",
      "semt": "Akkaya"
    },
    {
      "il": "Adana",
      "ilce": "Feke",
      "mahalle": "G\xF6belli Mahallesi",
      "postaKodu": "01662",
      "semt": "Akkaya"
    },
    {
      "il": "Adana",
      "ilce": "Feke",
      "mahalle": "G\xF6k\xE7eli Mahallesi",
      "postaKodu": "01660",
      "semt": "Feke"
    },
    {
      "il": "Adana",
      "ilce": "Feke",
      "mahalle": "G\xFCr\xFCmze Mahallesi",
      "postaKodu": "01662",
      "semt": "Akkaya"
    },
    {
      "il": "Adana",
      "ilce": "Feke",
      "mahalle": "G\xFCzp\u0131nar\u0131 Mahallesi",
      "postaKodu": "01662",
      "semt": "Akkaya"
    },
    {
      "il": "Adana",
      "ilce": "Feke",
      "mahalle": "H\u0131d\u0131ru\u015Fa\u011F\u0131 Mahallesi",
      "postaKodu": "01662",
      "semt": "Akkaya"
    },
    {
      "il": "Adana",
      "ilce": "Feke",
      "mahalle": "\u0130ncirci Mahallesi",
      "postaKodu": "01662",
      "semt": "Akkaya"
    },
    {
      "il": "Adana",
      "ilce": "Feke",
      "mahalle": "\u0130slam Mahallesi",
      "postaKodu": "01660",
      "semt": "Feke"
    },
    {
      "il": "Adana",
      "ilce": "Feke",
      "mahalle": "Kaley\xFCz\xFC Mahallesi",
      "postaKodu": "01662",
      "semt": "Akkaya"
    },
    {
      "il": "Adana",
      "ilce": "Feke",
      "mahalle": "Karacao\u011Flan Mahallesi",
      "postaKodu": "01660",
      "semt": "Feke"
    },
    {
      "il": "Adana",
      "ilce": "Feke",
      "mahalle": "Karacau\u015Fa\u011F\u0131 Mahallesi",
      "postaKodu": "01660",
      "semt": "Feke"
    },
    {
      "il": "Adana",
      "ilce": "Feke",
      "mahalle": "Ka\u015Falt\u0131 Mahallesi",
      "postaKodu": "01662",
      "semt": "Akkaya"
    },
    {
      "il": "Adana",
      "ilce": "Feke",
      "mahalle": "Kayadibi Mahallesi",
      "postaKodu": "01662",
      "semt": "Akkaya"
    },
    {
      "il": "Adana",
      "ilce": "Feke",
      "mahalle": "Kazanc\u0131 Mahallesi",
      "postaKodu": "01660",
      "semt": "Feke"
    },
    {
      "il": "Adana",
      "ilce": "Feke",
      "mahalle": "Keklik\xE7i Mahallesi",
      "postaKodu": "01660",
      "semt": "Feke"
    },
    {
      "il": "Adana",
      "ilce": "Feke",
      "mahalle": "K\u0131r\u0131ku\u015Fa\u011F\u0131 Mahallesi",
      "postaKodu": "01662",
      "semt": "Akkaya"
    },
    {
      "il": "Adana",
      "ilce": "Feke",
      "mahalle": "K\u0131sac\u0131kl\u0131 Mahallesi",
      "postaKodu": "01662",
      "semt": "Akkaya"
    },
    {
      "il": "Adana",
      "ilce": "Feke",
      "mahalle": "K\u0131z\u0131lyer Mahallesi",
      "postaKodu": "01662",
      "semt": "Akkaya"
    },
    {
      "il": "Adana",
      "ilce": "Feke",
      "mahalle": "Ko\xE7yaz\u0131 Mahallesi",
      "postaKodu": "01662",
      "semt": "Akkaya"
    },
    {
      "il": "Adana",
      "ilce": "Feke",
      "mahalle": "Konakkuran Mahallesi",
      "postaKodu": "01662",
      "semt": "Akkaya"
    },
    {
      "il": "Adana",
      "ilce": "Feke",
      "mahalle": "Kovuk\xE7\u0131nar Mahallesi",
      "postaKodu": "01662",
      "semt": "Akkaya"
    },
    {
      "il": "Adana",
      "ilce": "Feke",
      "mahalle": "Mansurlu Mahallesi",
      "postaKodu": "01662",
      "semt": "Akkaya"
    },
    {
      "il": "Adana",
      "ilce": "Feke",
      "mahalle": "Musalar Mahallesi",
      "postaKodu": "01662",
      "semt": "Akkaya"
    },
    {
      "il": "Adana",
      "ilce": "Feke",
      "mahalle": "Olu\xE7ak Mahallesi",
      "postaKodu": "01662",
      "semt": "Akkaya"
    },
    {
      "il": "Adana",
      "ilce": "Feke",
      "mahalle": "Ormanc\u0131k Mahallesi",
      "postaKodu": "01662",
      "semt": "Akkaya"
    },
    {
      "il": "Adana",
      "ilce": "Feke",
      "mahalle": "Ortak\xF6y Mahallesi",
      "postaKodu": "01662",
      "semt": "Akkaya"
    },
    {
      "il": "Adana",
      "ilce": "Feke",
      "mahalle": "Oru\xE7lu Mahallesi",
      "postaKodu": "01662",
      "semt": "Akkaya"
    },
    {
      "il": "Adana",
      "ilce": "Feke",
      "mahalle": "Pa\u015Fal\u0131 Mahallesi",
      "postaKodu": "01662",
      "semt": "Akkaya"
    },
    {
      "il": "Adana",
      "ilce": "Feke",
      "mahalle": "\u015Eahmuratl\u0131 Mahallesi",
      "postaKodu": "01662",
      "semt": "Akkaya"
    },
    {
      "il": "Adana",
      "ilce": "Feke",
      "mahalle": "S\xFClemi\u015Fli Mahallesi",
      "postaKodu": "01660",
      "semt": "Feke"
    },
    {
      "il": "Adana",
      "ilce": "Feke",
      "mahalle": "S\xFCphandere Mahallesi",
      "postaKodu": "01662",
      "semt": "Akkaya"
    },
    {
      "il": "Adana",
      "ilce": "Feke",
      "mahalle": "Tenkerli Mahallesi",
      "postaKodu": "01662",
      "semt": "Akkaya"
    },
    {
      "il": "Adana",
      "ilce": "Feke",
      "mahalle": "Tokmanakl\u0131 Mahallesi",
      "postaKodu": "01662",
      "semt": "Akkaya"
    },
    {
      "il": "Adana",
      "ilce": "Feke",
      "mahalle": "Tortulu Mahallesi",
      "postaKodu": "01662",
      "semt": "Akkaya"
    },
    {
      "il": "Adana",
      "ilce": "Feke",
      "mahalle": "U\u011Furluba\u011F Mahallesi",
      "postaKodu": "01662",
      "semt": "Akkaya"
    },
    {
      "il": "Adana",
      "ilce": "Feke",
      "mahalle": "Yaylap\u0131nar Mahallesi",
      "postaKodu": "01662",
      "semt": "Akkaya"
    },
    {
      "il": "Adana",
      "ilce": "Feke",
      "mahalle": "Yerebakan Mahallesi",
      "postaKodu": "01662",
      "semt": "Akkaya"
    },
    {
      "il": "Adana",
      "ilce": "Feke",
      "mahalle": "Ye\u015Fil D\xFC\u015Fm\xFC\u015F Mahallesi",
      "postaKodu": "01660",
      "semt": "Feke"
    },
    {
      "il": "Adana",
      "ilce": "\u0130mamo\u011Flu",
      "mahalle": "Adalet Mahallesi",
      "postaKodu": "01700",
      "semt": "\u0130mamo\u011Flu"
    },
    {
      "il": "Adana",
      "ilce": "\u0130mamo\u011Flu",
      "mahalle": "A\u011Fz\u0131karaca Mahallesi",
      "postaKodu": "01702",
      "semt": "Sayge\xE7it"
    },
    {
      "il": "Adana",
      "ilce": "\u0130mamo\u011Flu",
      "mahalle": "Alaybeyi Mahallesi",
      "postaKodu": "01702",
      "semt": "Sayge\xE7it"
    },
    {
      "il": "Adana",
      "ilce": "\u0130mamo\u011Flu",
      "mahalle": "Aliler Mahallesi",
      "postaKodu": "01702",
      "semt": "Sayge\xE7it"
    },
    {
      "il": "Adana",
      "ilce": "\u0130mamo\u011Flu",
      "mahalle": "Ayval\u0131 Mahallesi",
      "postaKodu": "01702",
      "semt": "Sayge\xE7it"
    },
    {
      "il": "Adana",
      "ilce": "\u0130mamo\u011Flu",
      "mahalle": "Camili Mahallesi",
      "postaKodu": "01702",
      "semt": "Sayge\xE7it"
    },
    {
      "il": "Adana",
      "ilce": "\u0130mamo\u011Flu",
      "mahalle": "\xC7\xF6rten Mahallesi",
      "postaKodu": "01702",
      "semt": "Sayge\xE7it"
    },
    {
      "il": "Adana",
      "ilce": "\u0130mamo\u011Flu",
      "mahalle": "Cumhuriyet Mahallesi",
      "postaKodu": "01700",
      "semt": "\u0130mamo\u011Flu"
    },
    {
      "il": "Adana",
      "ilce": "\u0130mamo\u011Flu",
      "mahalle": "Danac\u0131l\u0131 Mahallesi",
      "postaKodu": "01702",
      "semt": "Sayge\xE7it"
    },
    {
      "il": "Adana",
      "ilce": "\u0130mamo\u011Flu",
      "mahalle": "Fatih Mahallesi",
      "postaKodu": "01700",
      "semt": "\u0130mamo\u011Flu"
    },
    {
      "il": "Adana",
      "ilce": "\u0130mamo\u011Flu",
      "mahalle": "Hac\u0131hasanl\u0131 Mahallesi",
      "postaKodu": "01702",
      "semt": "Sayge\xE7it"
    },
    {
      "il": "Adana",
      "ilce": "\u0130mamo\u011Flu",
      "mahalle": "H\xFCrriyet Mahallesi",
      "postaKodu": "01700",
      "semt": "\u0130mamo\u011Flu"
    },
    {
      "il": "Adana",
      "ilce": "\u0130mamo\u011Flu",
      "mahalle": "Koyunevi Mahallesi",
      "postaKodu": "01702",
      "semt": "Sayge\xE7it"
    },
    {
      "il": "Adana",
      "ilce": "\u0130mamo\u011Flu",
      "mahalle": "Mal\u0131h\u0131d\u0131rl\u0131 Mahallesi",
      "postaKodu": "01702",
      "semt": "Sayge\xE7it"
    },
    {
      "il": "Adana",
      "ilce": "\u0130mamo\u011Flu",
      "mahalle": "Mente\u015F Mahallesi",
      "postaKodu": "01700",
      "semt": "\u0130mamo\u011Flu"
    },
    {
      "il": "Adana",
      "ilce": "\u0130mamo\u011Flu",
      "mahalle": "Otluk Mahallesi",
      "postaKodu": "01702",
      "semt": "Sayge\xE7it"
    },
    {
      "il": "Adana",
      "ilce": "\u0130mamo\u011Flu",
      "mahalle": "Pekmezci Mahallesi",
      "postaKodu": "01702",
      "semt": "Sayge\xE7it"
    },
    {
      "il": "Adana",
      "ilce": "\u0130mamo\u011Flu",
      "mahalle": "Sayca Mahallesi",
      "postaKodu": "01702",
      "semt": "Sayge\xE7it"
    },
    {
      "il": "Adana",
      "ilce": "\u0130mamo\u011Flu",
      "mahalle": "Sayge\xE7it Mahallesi",
      "postaKodu": "01702",
      "semt": "Sayge\xE7it"
    },
    {
      "il": "Adana",
      "ilce": "\u0130mamo\u011Flu",
      "mahalle": "Sevin\xE7li Mahallesi",
      "postaKodu": "01702",
      "semt": "Sayge\xE7it"
    },
    {
      "il": "Adana",
      "ilce": "\u0130mamo\u011Flu",
      "mahalle": "Sokuta\u015F Mahallesi",
      "postaKodu": "01702",
      "semt": "Sayge\xE7it"
    },
    {
      "il": "Adana",
      "ilce": "\u0130mamo\u011Flu",
      "mahalle": "Tuna Mahallesi",
      "postaKodu": "01700",
      "semt": "\u0130mamo\u011Flu"
    },
    {
      "il": "Adana",
      "ilce": "\u0130mamo\u011Flu",
      "mahalle": "\xDC\xE7tepe Mahallesi",
      "postaKodu": "01702",
      "semt": "Sayge\xE7it"
    },
    {
      "il": "Adana",
      "ilce": "\u0130mamo\u011Flu",
      "mahalle": "Ufac\u0131k\xF6ren Mahallesi",
      "postaKodu": "01702",
      "semt": "Sayge\xE7it"
    },
    {
      "il": "Adana",
      "ilce": "\u0130mamo\u011Flu",
      "mahalle": "Ulu\xE7\u0131nar Mahallesi",
      "postaKodu": "01702",
      "semt": "Sayge\xE7it"
    },
    {
      "il": "Adana",
      "ilce": "\u0130mamo\u011Flu",
      "mahalle": "Yaz\u0131tepe Mahallesi",
      "postaKodu": "01702",
      "semt": "Sayge\xE7it"
    },
    {
      "il": "Adana",
      "ilce": "\u0130mamo\u011Flu",
      "mahalle": "Yenievler Mahallesi",
      "postaKodu": "01702",
      "semt": "Sayge\xE7it"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "Ak\xE7al\u0131 Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "Akta\u015F Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "Alt\u0131nova Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "A\u015Fa\u011F\u0131belemedik Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "A\u015Fa\u011F\u0131y\xF6r\xFCkler Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "Ayakk\u0131f Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "Barakda\u011F\u0131 Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "Ba\u015Fkif Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "Bekirli Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "Beydemir Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "Bolacal\u0131 Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "Bucak Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "\xC7akall\u0131 Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "\xC7atalan Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "\xC7eceli Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "\xC7evlik Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "\xC7ocuklar Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "\xC7orlu Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "\xC7ukur Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "Demir\xE7it Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "D\xF6\u015Fekevi Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "Durak Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "E\u011Flence Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "Emelcik Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "Etekli Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "Fettahl\u0131 Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "Filikli Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "Gildirli Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "G\xF6khasanl\u0131 Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "G\xFCl\xFC\u015Fl\xFC Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "G\xFCven\xE7 Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "Hac\u0131k\u0131r\u0131 Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "Hac\u0131l\u0131 Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "Hac\u0131musali Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "Kaleda\u011F\u0131 Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "Kap\u0131kaya Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "Karahasanl\u0131 Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "Karak\u0131l\u0131\xE7 Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "Karakuyu Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "Karap\u0131nar Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "K\u0131r\u0131kl\u0131 Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "Kocaveliler Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "K\xF6r\xFCkl\xFC Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "Ku\u015Fcusofulu Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "Nergizlik Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "Nuhlu Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "\xD6merli Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "Sad\u0131kali Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "Sarimehmetli Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "Sayp\u0131nar Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "Selamp\u0131nar Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "Tat\u0131k Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "Topakta\u015F Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "Topkaral\u0131 Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "Torunsolakl\u0131 Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "T\xFCmenli Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karaisal\u0131",
      "mahalle": "Yaz\u0131ba\u015F\u0131 Mahallesi",
      "postaKodu": "01770",
      "semt": "Karaisal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Karata\u015F",
      "mahalle": "Adal\u0131 Mahallesi",
      "postaKodu": "01900",
      "semt": "Karata\u015F"
    },
    { "il": "Adana", "ilce": "Karata\u015F", "mahalle": "Atak\xF6y Mahallesi", "postaKodu": "01900", "semt": "Karata\u015F" },
    { "il": "Adana", "ilce": "Karata\u015F", "mahalle": "Bah\xE7e Mahallesi", "postaKodu": "01900", "semt": "Karata\u015F" },
    {
      "il": "Adana",
      "ilce": "Karata\u015F",
      "mahalle": "Bebeli Mahallesi",
      "postaKodu": "01900",
      "semt": "Karata\u015F"
    },
    {
      "il": "Adana",
      "ilce": "Karata\u015F",
      "mahalle": "\xC7a\u011F\u015F\u0131rli Mahallesi",
      "postaKodu": "01900",
      "semt": "Karata\u015F"
    },
    {
      "il": "Adana",
      "ilce": "Karata\u015F",
      "mahalle": "\xC7akir\xF6ren Mahallesi",
      "postaKodu": "01900",
      "semt": "Karata\u015F"
    },
    {
      "il": "Adana",
      "ilce": "Karata\u015F",
      "mahalle": "\xC7avu\u015Flu Mahallesi",
      "postaKodu": "01900",
      "semt": "Karata\u015F"
    },
    {
      "il": "Adana",
      "ilce": "Karata\u015F",
      "mahalle": "\xC7imeli Mahallesi",
      "postaKodu": "01900",
      "semt": "Karata\u015F"
    },
    {
      "il": "Adana",
      "ilce": "Karata\u015F",
      "mahalle": "\xC7ukurkam\u0131\u015F Mahallesi",
      "postaKodu": "01900",
      "semt": "Karata\u015F"
    },
    {
      "il": "Adana",
      "ilce": "Karata\u015F",
      "mahalle": "Damlapinar Mahallesi",
      "postaKodu": "01900",
      "semt": "Karata\u015F"
    },
    {
      "il": "Adana",
      "ilce": "Karata\u015F",
      "mahalle": "Develi\xF6ren Mahallesi",
      "postaKodu": "01900",
      "semt": "Karata\u015F"
    },
    {
      "il": "Adana",
      "ilce": "Karata\u015F",
      "mahalle": "Dolapli Mahallesi",
      "postaKodu": "01900",
      "semt": "Karata\u015F"
    },
    {
      "il": "Adana",
      "ilce": "Karata\u015F",
      "mahalle": "G\xF6lkaya Mahallesi",
      "postaKodu": "01900",
      "semt": "Karata\u015F"
    },
    {
      "il": "Adana",
      "ilce": "Karata\u015F",
      "mahalle": "Hacihasan Mahallesi",
      "postaKodu": "01900",
      "semt": "Karata\u015F"
    },
    {
      "il": "Adana",
      "ilce": "Karata\u015F",
      "mahalle": "Hasira\u011Faci Mahallesi",
      "postaKodu": "01900",
      "semt": "Karata\u015F"
    },
    {
      "il": "Adana",
      "ilce": "Karata\u015F",
      "mahalle": "Helvaci Mahallesi",
      "postaKodu": "01900",
      "semt": "Karata\u015F"
    },
    {
      "il": "Adana",
      "ilce": "Karata\u015F",
      "mahalle": "\u0130nneplih\xFCy\xFC\u011F\xFC Mahallesi",
      "postaKodu": "01900",
      "semt": "Karata\u015F"
    },
    {
      "il": "Adana",
      "ilce": "Karata\u015F",
      "mahalle": "\u0130sahacili Mahallesi",
      "postaKodu": "01900",
      "semt": "Karata\u015F"
    },
    {
      "il": "Adana",
      "ilce": "Karata\u015F",
      "mahalle": "Kapi Mahallesi",
      "postaKodu": "01900",
      "semt": "Karata\u015F"
    },
    {
      "il": "Adana",
      "ilce": "Karata\u015F",
      "mahalle": "Karag\xF6\xE7er Mahallesi",
      "postaKodu": "01900",
      "semt": "Karata\u015F"
    },
    {
      "il": "Adana",
      "ilce": "Karata\u015F",
      "mahalle": "Karata\u015F Mahallesi",
      "postaKodu": "01900",
      "semt": "Karata\u015F"
    },
    {
      "il": "Adana",
      "ilce": "Karata\u015F",
      "mahalle": "Kar\u015F\u0131yaka Mahallesi",
      "postaKodu": "01900",
      "semt": "Karata\u015F"
    },
    {
      "il": "Adana",
      "ilce": "Karata\u015F",
      "mahalle": "Kemaliye Mahallesi",
      "postaKodu": "01900",
      "semt": "Karata\u015F"
    },
    {
      "il": "Adana",
      "ilce": "Karata\u015F",
      "mahalle": "Kesik Mahallesi",
      "postaKodu": "01900",
      "semt": "Karata\u015F"
    },
    {
      "il": "Adana",
      "ilce": "Karata\u015F",
      "mahalle": "Kiremitli Mahallesi",
      "postaKodu": "01900",
      "semt": "Karata\u015F"
    },
    {
      "il": "Adana",
      "ilce": "Karata\u015F",
      "mahalle": "Kirhasan Mahallesi",
      "postaKodu": "01900",
      "semt": "Karata\u015F"
    },
    {
      "il": "Adana",
      "ilce": "Karata\u015F",
      "mahalle": "K\u0131z\u0131ltahta Mahallesi",
      "postaKodu": "01900",
      "semt": "Karata\u015F"
    },
    {
      "il": "Adana",
      "ilce": "Karata\u015F",
      "mahalle": "Meletmez Mahallesi",
      "postaKodu": "01900",
      "semt": "Karata\u015F"
    },
    {
      "il": "Adana",
      "ilce": "Karata\u015F",
      "mahalle": "Orta Mahallesi",
      "postaKodu": "01900",
      "semt": "Karata\u015F"
    },
    {
      "il": "Adana",
      "ilce": "Karata\u015F",
      "mahalle": "Oymakli Mahallesi",
      "postaKodu": "01900",
      "semt": "Karata\u015F"
    },
    {
      "il": "Adana",
      "ilce": "Karata\u015F",
      "mahalle": "Sarimsak Mahallesi",
      "postaKodu": "01900",
      "semt": "Karata\u015F"
    },
    {
      "il": "Adana",
      "ilce": "Karata\u015F",
      "mahalle": "S\u0131rkenli Mahallesi",
      "postaKodu": "01900",
      "semt": "Karata\u015F"
    },
    {
      "il": "Adana",
      "ilce": "Karata\u015F",
      "mahalle": "Tabaklar Mahallesi",
      "postaKodu": "01900",
      "semt": "Karata\u015F"
    },
    {
      "il": "Adana",
      "ilce": "Karata\u015F",
      "mahalle": "Tabur Mahallesi",
      "postaKodu": "01900",
      "semt": "Karata\u015F"
    },
    {
      "il": "Adana",
      "ilce": "Karata\u015F",
      "mahalle": "Terliksiz Mahallesi",
      "postaKodu": "01900",
      "semt": "Karata\u015F"
    },
    {
      "il": "Adana",
      "ilce": "Karata\u015F",
      "mahalle": "Toprakli Mahallesi",
      "postaKodu": "01900",
      "semt": "Karata\u015F"
    },
    {
      "il": "Adana",
      "ilce": "Karata\u015F",
      "mahalle": "Tuzkuyusu Mahallesi",
      "postaKodu": "01900",
      "semt": "Karata\u015F"
    },
    {
      "il": "Adana",
      "ilce": "Karata\u015F",
      "mahalle": "Tuzla Mahallesi",
      "postaKodu": "01900",
      "semt": "Karata\u015F"
    },
    {
      "il": "Adana",
      "ilce": "Karata\u015F",
      "mahalle": "Yassiveren Mahallesi",
      "postaKodu": "01900",
      "semt": "Karata\u015F"
    },
    {
      "il": "Adana",
      "ilce": "Karata\u015F",
      "mahalle": "Yemi\u015Fli Mahallesi",
      "postaKodu": "01900",
      "semt": "Karata\u015F"
    },
    {
      "il": "Adana",
      "ilce": "Karata\u015F",
      "mahalle": "Yeni Mahallesi",
      "postaKodu": "01900",
      "semt": "Karata\u015F"
    },
    {
      "il": "Adana",
      "ilce": "Karata\u015F",
      "mahalle": "Yenimurat Mahallesi",
      "postaKodu": "01900",
      "semt": "Karata\u015F"
    },
    {
      "il": "Adana",
      "ilce": "Karata\u015F",
      "mahalle": "Y\xFCzba\u015F\u0131 Mahallesi",
      "postaKodu": "01900",
      "semt": "Karata\u015F"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Acarmanta\u015F Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "A\u011Flibo\u011Faz Mahallesi",
      "postaKodu": "01500",
      "semt": "Kozan"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Akarca Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Ak\xE7aliu\u015Fa\u011Fi Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Akdam Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Akkaya Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Alapinar Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Andil Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Arslanli Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Arslanpa\u015Fa Mahallesi",
      "postaKodu": "01500",
      "semt": "Kozan"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Aydin Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Ay\u015Fehoca Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Ba\u011Flar Mahallesi",
      "postaKodu": "01500",
      "semt": "Kozan"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Ba\u011F\xF6z\xFC Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Ba\u011Ftepe Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Boztahra Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Bucak Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Bulduklu Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "\xC7amdere Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "\xC7amlarca Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "\xC7anakli Mahallesi",
      "postaKodu": "01500",
      "semt": "Kozan"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "\xC7andik Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "\xC7elenu\u015Fa\u011Fi Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "\xC7obanpinari Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "\xC7okak Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "\xC7ukur\xF6ren Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "\xC7ulluu\u015Fa\u011Fi Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Cumhuriyet Mahallesi",
      "postaKodu": "01500",
      "semt": "Kozan"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "\xC7\xFCr\xFCkl\xFC Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Damyeri Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Dikilita\u015F Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Dilekkaya Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Do\u011Fanalani Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Duralu\u015Fa\u011Fi Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Durmu\u015Flu Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "D\xFCza\u011Fa\xE7 Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Eniz\xE7akiri Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Ergenu\u015Fa\u011Fi Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Eskikabasakal Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Eskimanta\u015F Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Faydali Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Ferhatli Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Gazi Mahallesi",
      "postaKodu": "01555",
      "semt": "Hacibeyli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Gedikli Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "G\xF6k\xE7eyol Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "G\xF6kg\xF6z Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "G\xF6rbeyaz Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "G\xFCneri Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Hacibeyli Mahallesi",
      "postaKodu": "01555",
      "semt": "Hacibeyli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Hac\u0131m\u0131zali Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Hac\u0131u\u015Fa\u011F\u0131 Mahallesi",
      "postaKodu": "01500",
      "semt": "Kozan"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Hamam Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "\u0130demk\xF6y Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Ilica Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "I\u015Fikkaya Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "I\u015F\u0131kl\u0131 Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Kabaktepe Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Kahveli Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Kalkuma\xE7 Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Kap\u0131kaya Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Karabucak Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Karacao\u011Flan Mahallesi",
      "postaKodu": "01500",
      "semt": "Kozan"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Karacao\u011Flan Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Karahamzal\u0131 Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Karanebili Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Kemerk\xF6y Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "K\u0131br\u0131slar Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "K\u0131z\u0131llar Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "K\u0131zlarsekisi Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "K\xF6seli Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Kuytucak Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Kuyubeli Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Kuyuluk Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Mahmutlu Mahallesi",
      "postaKodu": "01500",
      "semt": "Kozan"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Mahyalar Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Maranke\xE7ili Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Minnetli Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Or\xE7an Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "\xD6rendere Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Oru\xE7lu Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "\xD6zba\u015F\u0131 Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Pekmezc\u0131 Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Postkabasakal Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Salmanl\u0131 Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "\u015Eerifli Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "\u015Eevkiye Mahallesi",
      "postaKodu": "01500",
      "semt": "Kozan"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Ta\u015F Mahallesi",
      "postaKodu": "01500",
      "semt": "Kozan"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Tav\u015Fantepe Mahallesi",
      "postaKodu": "01500",
      "semt": "Kozan"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Tepecik\xF6ren Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Tufanl\u0131 Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Tufanpa\u015Fa Mahallesi",
      "postaKodu": "01500",
      "semt": "Kozan"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Turgutlu Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "T\xFCrkeli Mahallesi",
      "postaKodu": "01500",
      "semt": "Kozan"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Turun\xE7lu Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Varsaklar Mahallesi",
      "postaKodu": "01500",
      "semt": "Kozan"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Velicanl\u0131 Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Yanalerik Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Yarimo\u011Flu Mahallesi",
      "postaKodu": "01500",
      "semt": "Kozan"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Yassi\xE7al\u0131 Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Yenik\xF6y Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Yukar\u0131ke\xE7ili Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Y\xFCksek\xF6ren Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Kozan",
      "mahalle": "Zerdali Mahallesi",
      "postaKodu": "01502",
      "semt": "Kahveli"
    },
    {
      "il": "Adana",
      "ilce": "Pozant\u0131",
      "mahalle": "Ak\xE7atekir Mahallesi",
      "postaKodu": "01490",
      "semt": "Ak\xE7atekir"
    },
    {
      "il": "Adana",
      "ilce": "Pozant\u0131",
      "mahalle": "Alpu Mahallesi",
      "postaKodu": "01472",
      "semt": "G\xF6kbez"
    },
    {
      "il": "Adana",
      "ilce": "Pozant\u0131",
      "mahalle": "A\u015F\xE7\u0131bekirli Mahallesi",
      "postaKodu": "01472",
      "semt": "G\xF6kbez"
    },
    {
      "il": "Adana",
      "ilce": "Pozant\u0131",
      "mahalle": "Belemedik Mahallesi",
      "postaKodu": "01472",
      "semt": "G\xF6kbez"
    },
    {
      "il": "Adana",
      "ilce": "Pozant\u0131",
      "mahalle": "\xC7aml\u0131bel Mahallesi",
      "postaKodu": "01472",
      "semt": "G\xF6kbez"
    },
    {
      "il": "Adana",
      "ilce": "Pozant\u0131",
      "mahalle": "Cumhuriyet Mahallesi",
      "postaKodu": "01470",
      "semt": "Pozant\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Pozant\u0131",
      "mahalle": "Da\u011Fdibi Mahallesi",
      "postaKodu": "01472",
      "semt": "G\xF6kbez"
    },
    {
      "il": "Adana",
      "ilce": "Pozant\u0131",
      "mahalle": "Eskikonac\u0131k Mahallesi",
      "postaKodu": "01472",
      "semt": "G\xF6kbez"
    },
    {
      "il": "Adana",
      "ilce": "Pozant\u0131",
      "mahalle": "F\u0131nd\u0131kl\u0131 Mahallesi",
      "postaKodu": "01472",
      "semt": "G\xF6kbez"
    },
    {
      "il": "Adana",
      "ilce": "Pozant\u0131",
      "mahalle": "G\xF6kbez Mahallesi",
      "postaKodu": "01472",
      "semt": "G\xF6kbez"
    },
    {
      "il": "Adana",
      "ilce": "Pozant\u0131",
      "mahalle": "Hamidiye Mahallesi",
      "postaKodu": "01472",
      "semt": "G\xF6kbez"
    },
    {
      "il": "Adana",
      "ilce": "Pozant\u0131",
      "mahalle": "\u0130stiklal Mahallesi",
      "postaKodu": "01470",
      "semt": "Pozant\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Pozant\u0131",
      "mahalle": "Kam\u0131\u015Fl\u0131 Mahallesi",
      "postaKodu": "01472",
      "semt": "G\xF6kbez"
    },
    {
      "il": "Adana",
      "ilce": "Pozant\u0131",
      "mahalle": "Karak\u0131\u015Flak\xE7\u0131 Mahallesi",
      "postaKodu": "01472",
      "semt": "G\xF6kbez"
    },
    {
      "il": "Adana",
      "ilce": "Pozant\u0131",
      "mahalle": "Kurtulu\u015F Mahallesi",
      "postaKodu": "01470",
      "semt": "Pozant\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Pozant\u0131",
      "mahalle": "\xD6merli Mahallesi",
      "postaKodu": "01472",
      "semt": "G\xF6kbez"
    },
    {
      "il": "Adana",
      "ilce": "Pozant\u0131",
      "mahalle": "Ya\u011Fl\u0131ta\u015F Mahallesi",
      "postaKodu": "01472",
      "semt": "G\xF6kbez"
    },
    {
      "il": "Adana",
      "ilce": "Pozant\u0131",
      "mahalle": "Yaz\u0131cak Mahallesi",
      "postaKodu": "01472",
      "semt": "G\xF6kbez"
    },
    {
      "il": "Adana",
      "ilce": "Pozant\u0131",
      "mahalle": "Yenikonac\u0131k Mahallesi",
      "postaKodu": "01472",
      "semt": "G\xF6kbez"
    },
    {
      "il": "Adana",
      "ilce": "Pozant\u0131",
      "mahalle": "Yukar\u0131belemedik Mahallesi",
      "postaKodu": "01472",
      "semt": "G\xF6kbez"
    },
    {
      "il": "Adana",
      "ilce": "Pozant\u0131",
      "mahalle": "Zafer Mahallesi",
      "postaKodu": "01470",
      "semt": "Pozant\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Saimbeyli",
      "mahalle": "Aksa\u011Fa\xE7 Mahallesi",
      "postaKodu": "01740",
      "semt": "Saimbeyli"
    },
    {
      "il": "Adana",
      "ilce": "Saimbeyli",
      "mahalle": "Avc\u0131p\u0131nar\u0131 Mahallesi",
      "postaKodu": "01740",
      "semt": "Saimbeyli"
    },
    {
      "il": "Adana",
      "ilce": "Saimbeyli",
      "mahalle": "Ayvac\u0131k Mahallesi",
      "postaKodu": "01740",
      "semt": "Saimbeyli"
    },
    {
      "il": "Adana",
      "ilce": "Saimbeyli",
      "mahalle": "Beyp\u0131nar\u0131 Mahallesi",
      "postaKodu": "01740",
      "semt": "Saimbeyli"
    },
    {
      "il": "Adana",
      "ilce": "Saimbeyli",
      "mahalle": "\xC7atak Mahallesi",
      "postaKodu": "01740",
      "semt": "Saimbeyli"
    },
    {
      "il": "Adana",
      "ilce": "Saimbeyli",
      "mahalle": "\xC7eralan Mahallesi",
      "postaKodu": "01740",
      "semt": "Saimbeyli"
    },
    {
      "il": "Adana",
      "ilce": "Saimbeyli",
      "mahalle": "\xC7orak Mahallesi",
      "postaKodu": "01740",
      "semt": "Saimbeyli"
    },
    {
      "il": "Adana",
      "ilce": "Saimbeyli",
      "mahalle": "Cumhurlu Mahallesi",
      "postaKodu": "01740",
      "semt": "Saimbeyli"
    },
    {
      "il": "Adana",
      "ilce": "Saimbeyli",
      "mahalle": "De\u011Firmenciu\u015Fa\u011F\u0131 Mahallesi",
      "postaKodu": "01740",
      "semt": "Saimbeyli"
    },
    {
      "il": "Adana",
      "ilce": "Saimbeyli",
      "mahalle": "Ey\xFCpl\xFC Mahallesi",
      "postaKodu": "01740",
      "semt": "Saimbeyli"
    },
    {
      "il": "Adana",
      "ilce": "Saimbeyli",
      "mahalle": "Fatih Mahallesi",
      "postaKodu": "01740",
      "semt": "Saimbeyli"
    },
    {
      "il": "Adana",
      "ilce": "Saimbeyli",
      "mahalle": "G\xF6kmelenler Mahallesi",
      "postaKodu": "01740",
      "semt": "Saimbeyli"
    },
    {
      "il": "Adana",
      "ilce": "Saimbeyli",
      "mahalle": "G\xFCrle\u015Fen Mahallesi",
      "postaKodu": "01740",
      "semt": "Saimbeyli"
    },
    {
      "il": "Adana",
      "ilce": "Saimbeyli",
      "mahalle": "Halilbeyli Mahallesi",
      "postaKodu": "01740",
      "semt": "Saimbeyli"
    },
    {
      "il": "Adana",
      "ilce": "Saimbeyli",
      "mahalle": "Himmetli Mahallesi",
      "postaKodu": "01740",
      "semt": "Saimbeyli"
    },
    {
      "il": "Adana",
      "ilce": "Saimbeyli",
      "mahalle": "\u0130slam Mahallesi",
      "postaKodu": "01740",
      "semt": "Saimbeyli"
    },
    {
      "il": "Adana",
      "ilce": "Saimbeyli",
      "mahalle": "Kandilli Mahallesi",
      "postaKodu": "01740",
      "semt": "Saimbeyli"
    },
    {
      "il": "Adana",
      "ilce": "Saimbeyli",
      "mahalle": "Kapakl\u0131kuyu Mahallesi",
      "postaKodu": "01740",
      "semt": "Saimbeyli"
    },
    {
      "il": "Adana",
      "ilce": "Saimbeyli",
      "mahalle": "Karakuyu Mahallesi",
      "postaKodu": "01740",
      "semt": "Saimbeyli"
    },
    {
      "il": "Adana",
      "ilce": "Saimbeyli",
      "mahalle": "K\u0131z\u0131la\u011Fa\xE7 Mahallesi",
      "postaKodu": "01740",
      "semt": "Saimbeyli"
    },
    {
      "il": "Adana",
      "ilce": "Saimbeyli",
      "mahalle": "Mahmutlu Mahallesi",
      "postaKodu": "01740",
      "semt": "Saimbeyli"
    },
    {
      "il": "Adana",
      "ilce": "Saimbeyli",
      "mahalle": "Nalta\u015F Mahallesi",
      "postaKodu": "01740",
      "semt": "Saimbeyli"
    },
    {
      "il": "Adana",
      "ilce": "Saimbeyli",
      "mahalle": "Narl\u0131dere Mahallesi",
      "postaKodu": "01740",
      "semt": "Saimbeyli"
    },
    {
      "il": "Adana",
      "ilce": "Saimbeyli",
      "mahalle": "Topallar Mahallesi",
      "postaKodu": "01740",
      "semt": "Saimbeyli"
    },
    {
      "il": "Adana",
      "ilce": "Saimbeyli",
      "mahalle": "T\xFCl\xFC Mahallesi",
      "postaKodu": "01740",
      "semt": "Saimbeyli"
    },
    {
      "il": "Adana",
      "ilce": "Saimbeyli",
      "mahalle": "Yardibi Mahallesi",
      "postaKodu": "01740",
      "semt": "Saimbeyli"
    },
    {
      "il": "Adana",
      "ilce": "Saimbeyli",
      "mahalle": "Yenik\xF6y Mahallesi",
      "postaKodu": "01740",
      "semt": "Saimbeyli"
    },
    {
      "il": "Adana",
      "ilce": "Saimbeyli",
      "mahalle": "Ye\u015Filba\u011Flar Mahallesi",
      "postaKodu": "01740",
      "semt": "Saimbeyli"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "Ac\u0131dere Mahallesi",
      "postaKodu": "01790",
      "semt": "Osmangazi"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "Ac\u0131dere OSB Mahallesi",
      "postaKodu": "01410",
      "semt": "Baklal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "Aflak Mahallesi",
      "postaKodu": "01790",
      "semt": "Osmangazi"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "Akkuyu Mahallesi",
      "postaKodu": "01790",
      "semt": "Osmangazi"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "Avc\u0131lar Mahallesi",
      "postaKodu": "01790",
      "semt": "Osmangazi"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "Ayd\u0131nyurdu Mahallesi",
      "postaKodu": "01790",
      "semt": "Osmangazi"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "Ayval\u0131 Mahallesi",
      "postaKodu": "01790",
      "semt": "Osmangazi"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "Balcal\u0131 Mahallesi",
      "postaKodu": "01250",
      "semt": "Remzio\u011Fuzar\u0131k"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "Bayram Hac\u0131l\u0131 Mahallesi",
      "postaKodu": "01790",
      "semt": "Osmangazi"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "Beyceli Mahallesi",
      "postaKodu": "01460",
      "semt": "Buruk"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "Boynuyolu\u011Fun Mahallesi",
      "postaKodu": "01790",
      "semt": "Osmangazi"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "Boztepe Mahallesi",
      "postaKodu": "01790",
      "semt": "Osmangazi"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "Buruk Cumhuriyet Mahallesi",
      "postaKodu": "01460",
      "semt": "Buruk"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "B\xFCy\xFCk Baklal\u0131 Mahallesi",
      "postaKodu": "01790",
      "semt": "Osmangazi"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "\xC7amlica Mahallesi",
      "postaKodu": "01790",
      "semt": "Osmangazi"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "\xC7ark\u0131pare Mahallesi",
      "postaKodu": "01790",
      "semt": "Osmangazi"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "\xC7ayl\u0131 Mahallesi",
      "postaKodu": "01790",
      "semt": "Osmangazi"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "Cerenli Mahallesi",
      "postaKodu": "01790",
      "semt": "Osmangazi"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "\xC7i\xE7ekli Mahallesi",
      "postaKodu": "01790",
      "semt": "Osmangazi"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "Cihad\u0131ye Mahallesi",
      "postaKodu": "01790",
      "semt": "Osmangazi"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "\xC7\u0131narl\u0131 Mahallesi",
      "postaKodu": "01790",
      "semt": "Osmangazi"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "\xC7iri\u015Fgedi\u011Fi Mahallesi",
      "postaKodu": "01790",
      "semt": "Osmangazi"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "Da\u011Fc\u0131 Mahallesi",
      "postaKodu": "01790",
      "semt": "Osmangazi"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "Dutluca Mahallesi",
      "postaKodu": "01790",
      "semt": "Osmangazi"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "E\u011Feciu\u015Fa\u011F\u0131 Mahallesi",
      "postaKodu": "01790",
      "semt": "Osmangazi"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "Ertu\u011Frulgazi Mahallesi",
      "postaKodu": "01790",
      "semt": "Osmangazi"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "Esentepe Mahallesi",
      "postaKodu": "01250",
      "semt": "Remzio\u011Fuzar\u0131k"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "G\xF6kbuket Mahallesi",
      "postaKodu": "01790",
      "semt": "Osmangazi"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "G\xF6ztepe Mahallesi",
      "postaKodu": "01790",
      "semt": "Osmangazi"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "G\xFCltepe Mahallesi",
      "postaKodu": "01250",
      "semt": "Remzio\u011Fuzar\u0131k"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "Hakkibeyli Mahallesi",
      "postaKodu": "01790",
      "semt": "Osmangazi"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "Hasanbeyli Mahallesi",
      "postaKodu": "01790",
      "semt": "Osmangazi"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "Hocalli Mahallesi",
      "postaKodu": "01790",
      "semt": "Osmangazi"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "H\xFCrriyet Mahallesi",
      "postaKodu": "01340",
      "semt": "\u0130ncirlik"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "\u0130stiklal Mahallesi",
      "postaKodu": "01460",
      "semt": "Buruk"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "Kara\xF6merli Mahallesi",
      "postaKodu": "01790",
      "semt": "Osmangazi"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "Karayusuflu Mahallesi",
      "postaKodu": "01790",
      "semt": "Osmangazi"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "Kargakeke\xE7 Mahallesi",
      "postaKodu": "01790",
      "semt": "Osmangazi"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "Karl\u0131k Mahallesi",
      "postaKodu": "16190",
      "semt": "Osmangazi"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "Ka\u015Fobas\u0131 Mahallesi",
      "postaKodu": "16190",
      "semt": "Osmangazi"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "Kemalpa\u015Fa Mahallesi",
      "postaKodu": "16190",
      "semt": "\u0130ncirlik"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "Kepeztepe Mahallesi",
      "postaKodu": "16190",
      "semt": "Osmangazi"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "K\u0131lba\u015F Mahallesi",
      "postaKodu": "16190",
      "semt": "Osmangazi"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "K\u0131l\u0131\xE7l\u0131 Mahallesi",
      "postaKodu": "16190",
      "semt": "Osmangazi"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "K\u0131z\u0131lka\u015F Mahallesi",
      "postaKodu": "16190",
      "semt": "Osmangazi"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "K\xF6sefak\u0131l\u0131 Mahallesi",
      "postaKodu": "16190",
      "semt": "Osmangazi"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "K\xFC\xE7\xFCkba\u015Fl\u0131 Mahallesi",
      "postaKodu": "16190",
      "semt": "Osmangazi"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "Maltepe Mahallesi",
      "postaKodu": "16190",
      "semt": "Osmangazi"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "Mehmet Akif Ersoy Mahallesi",
      "postaKodu": "16190",
      "semt": "Remzio\u011Fuzar\u0131k"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "Menek\u015Fe Mahallesi",
      "postaKodu": "16190",
      "semt": "Osmangazi"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "M\xFCminli Mahallesi",
      "postaKodu": "16190",
      "semt": "Osmangazi"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "Mustafalar Mahallesi",
      "postaKodu": "16190",
      "semt": "Osmangazi"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "Orhangazi Mahallesi",
      "postaKodu": "16190",
      "semt": "Remzio\u011Fuzar\u0131k"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "Osmangazi Mahallesi",
      "postaKodu": "16190",
      "semt": "Osmangazi"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "Remzi O\u011Fuz Ar\u0131k Mahallesi",
      "postaKodu": "16190",
      "semt": "Remzio\u011Fuzar\u0131k"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "\u015Eahintepe Mahallesi",
      "postaKodu": "16190",
      "semt": "Remzio\u011Fuzar\u0131k"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "Sar\u0131\xE7am Mahallesi",
      "postaKodu": "16190",
      "semt": "Osmangazi"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "Sofudede Mahallesi",
      "postaKodu": "16190",
      "semt": "Buruk"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "Suluca Mahallesi",
      "postaKodu": "16190",
      "semt": "Osmangazi"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "Turun\xE7lu Mahallesi",
      "postaKodu": "16190",
      "semt": "Osmangazi"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "\xDCnl\xFCce Mahallesi",
      "postaKodu": "16190",
      "semt": "Osmangazi"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "Ya\u011F\u0131zlar Mahallesi",
      "postaKodu": "16190",
      "semt": "Osmangazi"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "Yar\u0131mca Mahallesi",
      "postaKodu": "16190",
      "semt": "Osmangazi"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "Yavuz Sultan Selim Mahallesi",
      "postaKodu": "16190",
      "semt": "Remzio\u011Fuzar\u0131k"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "Yeni Mahallesi",
      "postaKodu": "16190",
      "semt": "\u0130ncirlik"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "Yeniyayla Mahallesi",
      "postaKodu": "16190",
      "semt": "Osmangazi"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "Ye\u015Filtepe Mahallesi",
      "postaKodu": "16190",
      "semt": "Remzio\u011Fuzar\u0131k"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "Y\u0131ld\u0131r\u0131m Beyaz\u0131t Mahallesi",
      "postaKodu": "16190",
      "semt": "Remzio\u011Fuzar\u0131k"
    },
    {
      "il": "Adana",
      "ilce": "Sar\u0131\xE7am",
      "mahalle": "Y\xFCrekli Mahallesi",
      "postaKodu": "16190",
      "semt": "Osmangazi"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "2000 Evler Mahallesi",
      "postaKodu": "01200",
      "semt": "G\xFCrselpa\u015Fa"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Ahmet Remzi Y\xFCre\u011Fir Mahallesi",
      "postaKodu": "01130",
      "semt": "Denizli"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Akkap\u0131 Mahallesi",
      "postaKodu": "01040",
      "semt": "Akkap\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Ali Dede Mahallesi",
      "postaKodu": "01020",
      "semt": "H\xFCk\xFCmet"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Ayd\u0131nlar Mahallesi",
      "postaKodu": "01190",
      "semt": "Fevzipa\u015Fa"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Bah\xE7elievler Mahallesi",
      "postaKodu": "01355",
      "semt": "Karayusuflu"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Bah\xE7e\u015Fehir Mahallesi",
      "postaKodu": "01200",
      "semt": "G\xFCrselpa\u015Fa"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Barbaros Mahallesi",
      "postaKodu": "01030",
      "semt": "Saydam"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Bar\u0131\u015F Mahallesi",
      "postaKodu": "01190",
      "semt": "Fevzipa\u015Fa"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Be\u015Focak Mahallesi",
      "postaKodu": "01020",
      "semt": "H\xFCk\xFCmet"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Bey Mahallesi",
      "postaKodu": "01030",
      "semt": "Saydam"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "B\xFCy\xFCk\xE7\u0131ld\u0131r\u0131m Mahallesi",
      "postaKodu": "01355",
      "semt": "Karayusuflu"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "B\xFCy\xFCkdikili Mahallesi",
      "postaKodu": "01355",
      "semt": "Karayusuflu"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Camuzcu Mahallesi",
      "postaKodu": "01355",
      "semt": "Karayusuflu"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "\xC7aput\xE7u Mahallesi",
      "postaKodu": "01355",
      "semt": "Karayusuflu"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Cemalpa\u015Fa Mahallesi",
      "postaKodu": "01200",
      "semt": "Gazipa\u015Fa"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "\xC7\u0131narl\u0131 Mahallesi",
      "postaKodu": "01060",
      "semt": "Kuruk\xF6pr\xFC"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Da\u011Flio\u011Flu Mahallesi",
      "postaKodu": "01040",
      "semt": "Akkap\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Demetevler Mahallesi",
      "postaKodu": "01180",
      "semt": "Ye\u015Filevler"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Denizli Mahallesi",
      "postaKodu": "01130",
      "semt": "Denizli"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Dervi\u015Fler Mahallesi",
      "postaKodu": "01355",
      "semt": "Karayusuflu"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "D\xF6rta\u011Fa\xE7 Mahallesi",
      "postaKodu": "01355",
      "semt": "Karayusuflu"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "D\xF6\u015Feme Mahallesi",
      "postaKodu": "01060",
      "semt": "Kuruk\xF6pr\xFC"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Dumlup\u0131nar Mahallesi",
      "postaKodu": "01070",
      "semt": "Meydan"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Emek Mahallesi",
      "postaKodu": "01080",
      "semt": "Emek"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Fatih Mahallesi",
      "postaKodu": "01160",
      "semt": "Mavi Bulvar Yurt"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Fevzipa\u015Fa Mahallesi",
      "postaKodu": "01190",
      "semt": "Fevzipa\u015Fa"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Gazipa\u015Fa Mahallesi",
      "postaKodu": "01140",
      "semt": "Ziyapa\u015Fa"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "G\xF6k\xE7eler Mahallesi",
      "postaKodu": "01355",
      "semt": "Karayusuflu"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "G\xF6lba\u015F\u0131 Mahallesi",
      "postaKodu": "01355",
      "semt": "Karayusuflu"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "G\xFClbah\xE7esi Mahallesi",
      "postaKodu": "01050",
      "semt": "G\xFClbah\xE7esi"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "G\xFClp\u0131nar Mahallesi",
      "postaKodu": "01070",
      "semt": "Meydan"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "G\xFCrselpa\u015Fa Mahallesi",
      "postaKodu": "01200",
      "semt": "G\xFCrselpa\u015Fa"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Hadirli Mahallesi",
      "postaKodu": "01365",
      "semt": "Hadirli"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Hanedan Mahallesi",
      "postaKodu": "01060",
      "semt": "Kuruk\xF6pr\xFC"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Havuzlu Bah\xE7e Mahallesi",
      "postaKodu": "01030",
      "semt": "Saydam"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "H\u0131rmal\u0131 Mahallesi",
      "postaKodu": "01060",
      "semt": "Kuruk\xF6pr\xFC"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "H\xFCrriyet Mahallesi",
      "postaKodu": "01030",
      "semt": "Saydam"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "\u0130smetpa\u015Fa Mahallesi",
      "postaKodu": "01180",
      "semt": "Ye\u015Filevler"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "\u0130stiklal Mahallesi",
      "postaKodu": "01060",
      "semt": "Kuruk\xF6pr\xFC"
    },
    {
      "il": "Adana",
      "ilce": "Ceyhan",
      "mahalle": "Karakuyu Mahallesi",
      "postaKodu": "01355",
      "semt": "Karayusuflu"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "2000 Evler Mahallesi",
      "postaKodu": "01200",
      "semt": "G\xFCrselpa\u015Fa"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Ahmet Remzi Y\xFCre\u011Fir Mahallesi",
      "postaKodu": "01130",
      "semt": "Denizli"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Akkap\u0131 Mahallesi",
      "postaKodu": "01040",
      "semt": "Akkap\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Alidede Mahallesi",
      "postaKodu": "01020",
      "semt": "H\xFCk\xFCmet"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Ayd\u0131nlar Mahallesi",
      "postaKodu": "01190",
      "semt": "Fevzipa\u015Fa"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Bah\xE7elievler Mahallesi",
      "postaKodu": "01355",
      "semt": "Karayusuflu"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Bah\xE7e\u015Fehir Mahallesi",
      "postaKodu": "01200",
      "semt": "G\xFCrselpa\u015Fa"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Barbaros Mahallesi",
      "postaKodu": "01030",
      "semt": "Saydam"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Bar\u0131\u015F Mahallesi",
      "postaKodu": "01190",
      "semt": "Fevzipa\u015Fa"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Be\u015Focak Mahallesi",
      "postaKodu": "01020",
      "semt": "H\xFCk\xFCmet"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Bey Mahallesi",
      "postaKodu": "01030",
      "semt": "Saydam"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "B\xFCy\xFCk\xE7\u0131ld\u0131r\u0131m Mahallesi",
      "postaKodu": "01355",
      "semt": "Karayusuflu"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "B\xFCy\xFCkdikili Mahallesi",
      "postaKodu": "01355",
      "semt": "Karayusuflu"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Camuzcu Mahallesi",
      "postaKodu": "01355",
      "semt": "Karayusuflu"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "\xC7aput\xE7u Mahallesi",
      "postaKodu": "01355",
      "semt": "Karayusuflu"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Cemalpa\u015Fa Mahallesi",
      "postaKodu": "01120",
      "semt": "Gazipa\u015Fa"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "\xC7\u0131narl\u0131 Mahallesi",
      "postaKodu": "01060",
      "semt": "Kuruk\xF6pr\xFC"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Da\u011Fl\u0131o\u011Flu Mahallesi",
      "postaKodu": "01040",
      "semt": "Akkap\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Demetevler Mahallesi",
      "postaKodu": "01180",
      "semt": "Ye\u015Filevler"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Denizli Mahallesi",
      "postaKodu": "01130",
      "semt": "Denizli"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Dervi\u015Fler Mahallesi",
      "postaKodu": "01355",
      "semt": "Karayusuflu"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "D\xF6rt A\u011Fa\xE7 Mahallesi",
      "postaKodu": "01355",
      "semt": "Karayusuflu"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "D\xF6\u015Feme Mahallesi",
      "postaKodu": "01060",
      "semt": "Kuruk\xF6pr\xFC"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Dumlup\u0131nar Mahallesi",
      "postaKodu": "01070",
      "semt": "Meydan"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Emek Mahallesi",
      "postaKodu": "01080",
      "semt": "Emek"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Fatih Mahallesi",
      "postaKodu": "01160",
      "semt": "Mavi Bulvar Yurt"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Fevzipa\u015Fa Mahallesi",
      "postaKodu": "01190",
      "semt": "Fevzipa\u015Fa"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Gazipa\u015Fa Mahallesi",
      "postaKodu": "01140",
      "semt": "Ziyapa\u015Fa"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "G\xF6k\xE7eler Mahallesi",
      "postaKodu": "01355",
      "semt": "Karayusuflu"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "G\xF6lba\u015F\u0131 Mahallesi",
      "postaKodu": "01355",
      "semt": "Karayusuflu"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "G\xFClbah\xE7esi Mahallesi",
      "postaKodu": "01050",
      "semt": "G\xFClbah\xE7esi"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "G\xFClp\u0131nar Mahallesi",
      "postaKodu": "01070",
      "semt": "Meydan"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "G\xFCrselpa\u015Fa Mahallesi",
      "postaKodu": "01200",
      "semt": "G\xFCrselpa\u015Fa"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Hadirli Mahallesi",
      "postaKodu": "01365",
      "semt": "Hadirli"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Hanedan Mahallesi",
      "postaKodu": "01060",
      "semt": "Kuruk\xF6pr\xFC"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Havuzlubah\xE7e Mahallesi",
      "postaKodu": "01030",
      "semt": "Saydam"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Hurmali Mahallesi",
      "postaKodu": "01060",
      "semt": "Kuruk\xF6pr\xFC"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "H\xFCrriyet Mahallesi",
      "postaKodu": "01030",
      "semt": "Saydam"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "\u0130smetpa\u015Fa Mahallesi",
      "postaKodu": "01180",
      "semt": "Ye\u015Filevler"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "\u0130stiklal Mahallesi",
      "postaKodu": "01060",
      "semt": "Kuruk\xF6pr\xFC"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Karakuyu Mahallesi",
      "postaKodu": "01355",
      "semt": "Karayusuflu"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Karasoku Mahallesi",
      "postaKodu": "01010",
      "semt": "Ya\u011Fcami"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Karayusuflu Mahallesi",
      "postaKodu": "01355",
      "semt": "Karayusuflu"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Kavakl\u0131 Mahallesi",
      "postaKodu": "01430",
      "semt": "K\xFC\xE7\xFCkdikili"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Kayal\u0131ba\u011F Mahallesi",
      "postaKodu": "01010",
      "semt": "Ya\u011Fcami"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Kay\u0131\u015Fl\u0131 Mahallesi",
      "postaKodu": "01355",
      "semt": "Karayusuflu"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Kocavezir Mahallesi",
      "postaKodu": "01060",
      "semt": "Kuruk\xF6pr\xFC"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "K\xF6yl\xFCo\u011Flu Mahallesi",
      "postaKodu": "01355",
      "semt": "Karayusuflu"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Koyuncu Mahallesi",
      "postaKodu": "01355",
      "semt": "Karayusuflu"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Koza Mahallesi",
      "postaKodu": "01430",
      "semt": "K\xFC\xE7\xFCkdikili"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "K\xFC\xE7\xFCk\xE7\u0131ld\u0131r\u0131m Mahallesi",
      "postaKodu": "01355",
      "semt": "Karayusuflu"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "K\xFC\xE7\xFCkdikili Mahallesi",
      "postaKodu": "01430",
      "semt": "K\xFC\xE7\xFCkdikili"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Kurtulu\u015F Mahallesi",
      "postaKodu": "01130",
      "semt": "Denizli"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Kuruk\xF6pr\xFC Mahallesi",
      "postaKodu": "01060",
      "semt": "Kuruk\xF6pr\xFC"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Kuyumcular Mahallesi",
      "postaKodu": "01355",
      "semt": "Karayusuflu"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Mekan Mahallesi",
      "postaKodu": "01430",
      "semt": "K\xFC\xE7\xFCkdikili"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Mestanzade Mahallesi",
      "postaKodu": "01020",
      "semt": "H\xFCk\xFCmet"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Meydan Mahallesi",
      "postaKodu": "01070",
      "semt": "Meydan"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Midik Mahallesi",
      "postaKodu": "01030",
      "semt": "Saydam"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Mirza\xE7elebi Mahallesi",
      "postaKodu": "01070",
      "semt": "Meydan"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Mithatpa\u015Fa Mahallesi",
      "postaKodu": "01130",
      "semt": "Denizli"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "M\xFCrselo\u011Flu Mahallesi",
      "postaKodu": "01355",
      "semt": "Karayusuflu"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Nam\u0131k Kemal Mahallesi",
      "postaKodu": "01140",
      "semt": "Ziyapa\u015Fa"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Narl\u0131ca Mahallesi",
      "postaKodu": "01180",
      "semt": "Ye\u015Filevler"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Onur Mahallesi",
      "postaKodu": "01100",
      "semt": "\u015Eakirpa\u015Fa"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Ova Mahallesi",
      "postaKodu": "01080",
      "semt": "Emek"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "P\u0131nar Mahallesi",
      "postaKodu": "01160",
      "semt": "Mavi Bulvar Yurt"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Re\u015Fatbey Mahallesi",
      "postaKodu": "01120",
      "semt": "Gazipa\u015Fa"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Sakarya Mahallesi",
      "postaKodu": "01130",
      "semt": "Denizli"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "\u015Eakirpa\u015Fa Mahallesi",
      "postaKodu": "01080",
      "semt": "Emek"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Salmanbeyli Mahallesi",
      "postaKodu": "01355",
      "semt": "Karayusuflu"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Sar\u0131hamzal\u0131 Mahallesi",
      "postaKodu": "01110",
      "semt": "Ye\u015Filoba"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Sar\u0131hu\u011Flar Mahallesi",
      "postaKodu": "01355",
      "semt": "Karayusuflu"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Sar\u0131yakup Mahallesi",
      "postaKodu": "01020",
      "semt": "H\xFCk\xFCmet"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "\u015Eehitduran Mahallesi",
      "postaKodu": "01020",
      "semt": "H\xFCk\xFCmet"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Serinevler Mahallesi",
      "postaKodu": "01355",
      "semt": "Karayusuflu"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "S\xF6\u011F\xFCtl\xFC Mahallesi",
      "postaKodu": "01110",
      "semt": "Ye\u015Filoba"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Sucuzade Mahallesi",
      "postaKodu": "01030",
      "semt": "Saydam"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "S\xFCmer Mahallesi",
      "postaKodu": "01140",
      "semt": "Ziyapa\u015Fa"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Telldere Mahallesi",
      "postaKodu": "01160",
      "semt": "Mavi Bulvar Yurt"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Tepeba\u011F Mahallesi",
      "postaKodu": "01010",
      "semt": "Ya\u011Fcami"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "T\xFCrkoca\u011F\u0131 Mahallesi",
      "postaKodu": "01020",
      "semt": "H\xFCk\xFCmet"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "U\xE7ak Mahallesi",
      "postaKodu": "01080",
      "semt": "Emek"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Ulucami Mahallesi",
      "postaKodu": "01010",
      "semt": "Ya\u011Fcami"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Yalmanl\u0131 Mahallesi",
      "postaKodu": "01355",
      "semt": "Karayusuflu"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Yeni Mahallesi",
      "postaKodu": "01200",
      "semt": "G\xFCrselpa\u015Fa"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Yenibaraj Mahallesi",
      "postaKodu": "01150",
      "semt": "Ye\u015Filyurt"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Yenibey Mahallesi",
      "postaKodu": "01020",
      "semt": "H\xFCk\xFCmet"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Yenidam Mahallesi",
      "postaKodu": "01355",
      "semt": "Karayusuflu"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Ye\u015Filevler Mahallesi",
      "postaKodu": "01180",
      "semt": "Ye\u015Filevler"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Ye\u015Filoba Mahallesi",
      "postaKodu": "01100",
      "semt": "\u015Eakirpa\u015Fa"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Ye\u015Filyurt Mahallesi",
      "postaKodu": "01150",
      "semt": "Ye\u015Filyurt"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Ye\u015Filyuva Mahallesi",
      "postaKodu": "01070",
      "semt": "Meydan"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Yolge\xE7en Mahallesi",
      "postaKodu": "01355",
      "semt": "Karayusuflu"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Zeytinli Mahallesi",
      "postaKodu": "01355",
      "semt": "Karayusuflu"
    },
    {
      "il": "Adana",
      "ilce": "Seyhan",
      "mahalle": "Ziyapa\u015Fa Mahallesi",
      "postaKodu": "01140",
      "semt": "Ziyapa\u015Fa"
    },
    {
      "il": "Adana",
      "ilce": "Tufanbeyli",
      "mahalle": "Ak\xE7al Mahallesi",
      "postaKodu": "01642",
      "semt": "Damlal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Tufanbeyli",
      "mahalle": "Akp\u0131nar Mahallesi",
      "postaKodu": "01642",
      "semt": "Damlal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Tufanbeyli",
      "mahalle": "Ayvat Mahallesi",
      "postaKodu": "01642",
      "semt": "Damlal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Tufanbeyli",
      "mahalle": "Bolatp\u0131nar\u0131 Mahallesi",
      "postaKodu": "01642",
      "semt": "Damlal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Tufanbeyli",
      "mahalle": "Bozg\xFCney Mahallesi",
      "postaKodu": "01642",
      "semt": "Damlal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Tufanbeyli",
      "mahalle": "\xC7atal\xE7am Mahallesi",
      "postaKodu": "01642",
      "semt": "Damlal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Tufanbeyli",
      "mahalle": "\xC7ukurki\u015Fla Mahallesi",
      "postaKodu": "01642",
      "semt": "Damlal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Tufanbeyli",
      "mahalle": "Cumhuriyet Mahallesi",
      "postaKodu": "01640",
      "semt": "Tufanbeyli"
    },
    {
      "il": "Adana",
      "ilce": "Tufanbeyli",
      "mahalle": "Damlal\u0131 Mahallesi",
      "postaKodu": "01642",
      "semt": "Damlal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Tufanbeyli",
      "mahalle": "Demiro\u011Flu Mahallesi",
      "postaKodu": "01642",
      "semt": "Damlal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Tufanbeyli",
      "mahalle": "Do\u011Fanbeyli Mahallesi",
      "postaKodu": "01642",
      "semt": "Damlal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Tufanbeyli",
      "mahalle": "Do\u011Fanl\u0131 Mahallesi",
      "postaKodu": "01642",
      "semt": "Damlal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Tufanbeyli",
      "mahalle": "Elemanl\u0131 Mahallesi",
      "postaKodu": "01642",
      "semt": "Damlal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Tufanbeyli",
      "mahalle": "Evc\u0131 Mahallesi",
      "postaKodu": "01642",
      "semt": "Damlal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Tufanbeyli",
      "mahalle": "Fatmakuyu Mahallesi",
      "postaKodu": "01642",
      "semt": "Damlal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Tufanbeyli",
      "mahalle": "G\xFCzelim Mahallesi",
      "postaKodu": "01642",
      "semt": "Damlal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Tufanbeyli",
      "mahalle": "Hanyeri Mahallesi",
      "postaKodu": "01642",
      "semt": "Damlal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Tufanbeyli",
      "mahalle": "\u0130\u011Fdebel Mahallesi",
      "postaKodu": "01642",
      "semt": "Damlal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Tufanbeyli",
      "mahalle": "\u0130stiklal Mahallesi",
      "postaKodu": "01640",
      "semt": "Tufanbeyli"
    },
    {
      "il": "Adana",
      "ilce": "Tufanbeyli",
      "mahalle": "Karsavran Mahallesi",
      "postaKodu": "01642",
      "semt": "Damlal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Tufanbeyli",
      "mahalle": "Kayap\u0131nar Mahallesi",
      "postaKodu": "01642",
      "semt": "Damlal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Tufanbeyli",
      "mahalle": "Kayarc\u0131k Mahallesi",
      "postaKodu": "01642",
      "semt": "Damlal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Tufanbeyli",
      "mahalle": "Kirazl\u0131yurt Mahallesi",
      "postaKodu": "01642",
      "semt": "Damlal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Tufanbeyli",
      "mahalle": "Kocca\u011F\u0131z Mahallesi",
      "postaKodu": "01642",
      "semt": "Damlal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Tufanbeyli",
      "mahalle": "Ortak\xF6y Mahallesi",
      "postaKodu": "01642",
      "semt": "Damlal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Tufanbeyli",
      "mahalle": "Pekmezli Mahallesi",
      "postaKodu": "01642",
      "semt": "Damlal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Tufanbeyli",
      "mahalle": "P\u0131narlar Mahallesi",
      "postaKodu": "01642",
      "semt": "Damlal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Tufanbeyli",
      "mahalle": "\u015Ear Mahallesi",
      "postaKodu": "01642",
      "semt": "Damlal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Tufanbeyli",
      "mahalle": "Ta\u015Fp\u0131nar Mahallesi",
      "postaKodu": "01642",
      "semt": "Damlal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Tufanbeyli",
      "mahalle": "Tozlu Mahallesi",
      "postaKodu": "01642",
      "semt": "Damlal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Tufanbeyli",
      "mahalle": "Yamanl\u0131 Mahallesi",
      "postaKodu": "01642",
      "semt": "Damlal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Tufanbeyli",
      "mahalle": "Yeni Cami Mahallesi",
      "postaKodu": "01640",
      "semt": "Tufanbeyli"
    },
    {
      "il": "Adana",
      "ilce": "Tufanbeyli",
      "mahalle": "Ye\u015Filova Mahallesi",
      "postaKodu": "01642",
      "semt": "Damlal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Yumurtal\u0131k",
      "mahalle": "Akdeniz Mahallesi",
      "postaKodu": "01680",
      "semt": "Yumurtal\u0131k"
    },
    {
      "il": "Adana",
      "ilce": "Yumurtal\u0131k",
      "mahalle": "Akyuva Mahallesi",
      "postaKodu": "01680",
      "semt": "Yumurtal\u0131k"
    },
    {
      "il": "Adana",
      "ilce": "Yumurtal\u0131k",
      "mahalle": "Asmal\u0131 Mahallesi",
      "postaKodu": "01682",
      "semt": "Kalemli"
    },
    {
      "il": "Adana",
      "ilce": "Yumurtal\u0131k",
      "mahalle": "Ayas Mahallesi",
      "postaKodu": "01680",
      "semt": "Yumurtal\u0131k"
    },
    {
      "il": "Adana",
      "ilce": "Yumurtal\u0131k",
      "mahalle": "Ayval\u0131k Mahallesi",
      "postaKodu": "01682",
      "semt": "Kalemli"
    },
    {
      "il": "Adana",
      "ilce": "Yumurtal\u0131k",
      "mahalle": "Demirta\u015F Mahallesi",
      "postaKodu": "01682",
      "semt": "Kalemli"
    },
    {
      "il": "Adana",
      "ilce": "Yumurtal\u0131k",
      "mahalle": "Deveciu\u015Fa\u011F\u0131 Mahallesi",
      "postaKodu": "01682",
      "semt": "Kalemli"
    },
    {
      "il": "Adana",
      "ilce": "Yumurtal\u0131k",
      "mahalle": "Devri\u015Fiye Mahallesi",
      "postaKodu": "01680",
      "semt": "Kalemli"
    },
    {
      "il": "Adana",
      "ilce": "Yumurtal\u0131k",
      "mahalle": "G\xF6lovas\u0131 Mahallesi",
      "postaKodu": "01682",
      "semt": "Kalemli"
    },
    {
      "il": "Adana",
      "ilce": "Yumurtal\u0131k",
      "mahalle": "Hamzal\u0131 Mahallesi",
      "postaKodu": "01682",
      "semt": "Kalemli"
    },
    {
      "il": "Adana",
      "ilce": "Yumurtal\u0131k",
      "mahalle": "Haylazl\u0131 Mahallesi",
      "postaKodu": "01682",
      "semt": "Kalemli"
    },
    {
      "il": "Adana",
      "ilce": "Yumurtal\u0131k",
      "mahalle": "Kald\u0131r\u0131m Mahallesi",
      "postaKodu": "01682",
      "semt": "Kalemli"
    },
    {
      "il": "Adana",
      "ilce": "Yumurtal\u0131k",
      "mahalle": "Kalemli Mahallesi",
      "postaKodu": "01682",
      "semt": "Kalemli"
    },
    {
      "il": "Adana",
      "ilce": "Yumurtal\u0131k",
      "mahalle": "Kemalpa\u015Fa Mahallesi",
      "postaKodu": "01680",
      "semt": "Yumurtal\u0131k"
    },
    {
      "il": "Adana",
      "ilce": "Yumurtal\u0131k",
      "mahalle": "Kesmeburun Mahallesi",
      "postaKodu": "01682",
      "semt": "Kalemli"
    },
    {
      "il": "Adana",
      "ilce": "Yumurtal\u0131k",
      "mahalle": "K\u0131rm\u0131z\u0131dam Mahallesi",
      "postaKodu": "01682",
      "semt": "Kalemli"
    },
    {
      "il": "Adana",
      "ilce": "Yumurtal\u0131k",
      "mahalle": "Kuzup\u0131nar\u0131 Mahallesi",
      "postaKodu": "01682",
      "semt": "Kalemli"
    },
    {
      "il": "Adana",
      "ilce": "Yumurtal\u0131k",
      "mahalle": "Narl\u0131\xF6ren Mahallesi",
      "postaKodu": "01682",
      "semt": "Kalemli"
    },
    {
      "il": "Adana",
      "ilce": "Yumurtal\u0131k",
      "mahalle": "\xD6ren Mahallesi",
      "postaKodu": "01680",
      "semt": "Yumurtal\u0131k"
    },
    {
      "il": "Adana",
      "ilce": "Yumurtal\u0131k",
      "mahalle": "Sug\xF6z\xFC Mahallesi",
      "postaKodu": "01682",
      "semt": "Kalemli"
    },
    {
      "il": "Adana",
      "ilce": "Yumurtal\u0131k",
      "mahalle": "Yenik\xF6y Mahallesi",
      "postaKodu": "01682",
      "semt": "Kalemli"
    },
    {
      "il": "Adana",
      "ilce": "Yumurtal\u0131k",
      "mahalle": "Ye\u015Filk\xF6y Mahallesi",
      "postaKodu": "01682",
      "semt": "Kalemli"
    },
    {
      "il": "Adana",
      "ilce": "Yumurtal\u0131k",
      "mahalle": "Yumurtal\u0131k Mahallesi",
      "postaKodu": "01682",
      "semt": "Kalemli"
    },
    {
      "il": "Adana",
      "ilce": "Yumurtal\u0131k",
      "mahalle": "Zeytinbeli Mahallesi",
      "postaKodu": "01682",
      "semt": "Kalemli"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "19 May\u0131s Mahallesi",
      "postaKodu": "01285",
      "semt": "Bah\xE7elievler"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Abdio\u011Flu Cumhuriyet Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "A\u011Fz\u0131b\xFCy\xFCk Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Akarcal\u0131 Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Akdal Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Akdeniz Mahallesi",
      "postaKodu": "01291",
      "semt": "Yama\xE7l\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Ak\u0131nc\u0131lar Mahallesi",
      "postaKodu": "01220",
      "semt": "Yavuzlar"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Akp\u0131nar Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Alihocal\u0131 Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Anadolu Mahallesi",
      "postaKodu": "01285",
      "semt": "Bah\xE7elievler"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Atakent Mahallesi",
      "postaKodu": "01260",
      "semt": "Karacao\u011Flan"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Atat\xFCrk Mahallesi",
      "postaKodu": "01375",
      "semt": "Havutlu"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Ayd\u0131nc\u0131k Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Bah\xE7elievler Mahallesi",
      "postaKodu": "01285",
      "semt": "Bah\xE7elievler"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Ba\u015Fak Mahallesi",
      "postaKodu": "01285",
      "semt": "Bah\xE7elievler"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Bel\xF6ren Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Beyk\xF6y Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "B\xFCy\xFCkkap\u0131l\u0131 Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "\xC7a\u011F\u0131rkanl\u0131 Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Camil Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "\xC7aml\u0131bel Mahallesi",
      "postaKodu": "01260",
      "semt": "Karacao\u011Flan"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "\xC7atalp\u0131nar Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "\xC7eleml\u0131 Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Cine Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "C\u0131r\u0131k Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "\xC7otlu Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Cumhuriyet Mahallesi",
      "postaKodu": "01280",
      "semt": "Kar\u015F\u0131yaka"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Dadalo\u011Flu Mahallesi",
      "postaKodu": "01240",
      "semt": "PttEvleri"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Dani\u015Fment Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Dede Korkut Mahallesi",
      "postaKodu": "01285",
      "semt": "Bah\xE7elievler"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Dedep\u0131nar\u0131 Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Denizkuyusu Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Dervi\u015Fler Mahallesi",
      "postaKodu": "01260",
      "semt": "Karacao\u011Flan"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Do\u011Fankent Bah\xE7elievler Mahallesi",
      "postaKodu": "01370",
      "semt": "Do\u011Fankent"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Do\u011Fankent Cumhuriyet Mahallesi",
      "postaKodu": "01370",
      "semt": "Do\u011Fankent"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Do\u011Fankent K\u0131\u015Fla Mahallesi",
      "postaKodu": "01370",
      "semt": "Do\u011Fankent"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "D\xFCzce Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "E\u011Fria\u011Fa\xE7 Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Esenler Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Eski Misis Mahallesi",
      "postaKodu": "01350",
      "semt": "Yakap\u0131nar"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Gazipa\u015Fa Mahallesi",
      "postaKodu": "01370",
      "semt": "Do\u011Fankent"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Ge\xE7itli Cumhuriyet Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "G\xF6k\xE7eli Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "G\xFCm\xFC\u015Fyaz\u0131 Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "G\xFCne\u015Fli Mahallesi",
      "postaKodu": "01280",
      "semt": "Kar\u015F\u0131yaka"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "G\xFCvelo\u011Flu Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "G\xFCzel Cumhuriyet Mahallesi",
      "postaKodu": "01965",
      "semt": "\u0130ncirlik"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "G\xFCzelevler Mahallesi",
      "postaKodu": "01285",
      "semt": "Bah\xE7elievler"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Haciali Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Havraniye Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Havutlu Mahallesi",
      "postaKodu": "01375",
      "semt": "Havutlu"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Haydaro\u011Flu Mahallesi",
      "postaKodu": "01291",
      "semt": "Yama\xE7l\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Herekli Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Irmakba\u015F\u0131 Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Kad\u0131k\xF6y Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Kami\u015Fli Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Karaahmetli Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Karacao\u011Flan Mahallesi",
      "postaKodu": "01240",
      "semt": "PttEvleri"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Ka\u015Fl\u0131ca Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Kayarl\u0131 Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Kaz\u0131m Karabekir Mahallesi",
      "postaKodu": "01230",
      "semt": "Kaz\u0131mkarabekir"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Kiremithane Mahallesi",
      "postaKodu": "01260",
      "semt": "Karacao\u011Flan"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "K\u0131\u015Fla Mahallesi",
      "postaKodu": "01230",
      "semt": "Kaz\u0131mkarabekir"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "K\xF6kl\xFCce Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "K\xF6pr\xFCg\xF6z\xFC Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "K\xF6pr\xFCl\xFC Mahallesi",
      "postaKodu": "01230",
      "semt": "Kaz\u0131mkarabekir"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Koza Mahallesi",
      "postaKodu": "01285",
      "semt": "Bah\xE7elievler"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "K\xFCt\xFCkl\xFC Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Levent Mahallesi",
      "postaKodu": "01285",
      "semt": "Bah\xE7elievler"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Mutlu Mahallesi",
      "postaKodu": "01260",
      "semt": "Karacao\u011Flan"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "\xD6zg\xFCr Mahallesi",
      "postaKodu": "01220",
      "semt": "Yavuzlar"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "\xD6zler Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "P.T.T Mahallesi",
      "postaKodu": "01240",
      "semt": "PttEvleri"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Pa\u015Fak\xF6y Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Pekmezli Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Sa\u011Fd\u0131\xE7l\u0131 Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "\u015Eahina\u011Fa Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Sak\u0131zl\u0131 Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Sar\u0131\xE7am Mahallesi",
      "postaKodu": "01220",
      "semt": "Yavuzlar"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Sazak Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "\u015Eehit Erkut Akbay Mahallesi",
      "postaKodu": "01260",
      "semt": "Karacao\u011Flan"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Selahattin Eyyubi Mahallesi",
      "postaKodu": "01240",
      "semt": "PttEvleri"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Serinevler Mahallesi",
      "postaKodu": "01240",
      "semt": "PttEvleri"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Seyhan Mahallesi",
      "postaKodu": "01291",
      "semt": "Yama\xE7l\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "\u015Eeyhmurat Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Sinanpa\u015Fa Mahallesi",
      "postaKodu": "01220",
      "semt": "Yavuzlar"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Solakl\u0131 Cumhuriyet Mahallesi",
      "postaKodu": "01375",
      "semt": "Havutlu"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Solakl\u0131 H\xFCrriyet Mahallesi",
      "postaKodu": "01375",
      "semt": "Havutlu"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Tahsilli Mahallesi",
      "postaKodu": "01260",
      "semt": "Karacao\u011Flan"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Ta\u015Fc\u0131 Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Ulubatl\u0131 Hasan Mahallesi",
      "postaKodu": "01260",
      "semt": "Karacao\u011Flan"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Vayvayl\u0131 Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Yah\u015Filer Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Yakap\u0131nar Mahallesi",
      "postaKodu": "01358",
      "semt": "Abdio\u011Flu"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Yaln\u0131zca Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Yama\xE7l\u0131 Mahallesi",
      "postaKodu": "01291",
      "semt": "Yama\xE7l\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Yavuzlar Mahallesi",
      "postaKodu": "01220",
      "semt": "Yavuzlar"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Yenice Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Yenido\u011Fan Mahallesi",
      "postaKodu": "01263",
      "semt": "Keresteciler"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Yenik\xF6y Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Yerdelen Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Ye\u015Fil Ba\u011Flar Mahallesi",
      "postaKodu": "01285",
      "semt": "Bah\xE7elievler"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Yukar\u0131\xE7i\xE7ekli Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Yunus Emre Mahallesi",
      "postaKodu": "01285",
      "semt": "Bah\xE7elievler"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Yunus O\u011Flu Cumhuriyet Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Yunus O\u011Flu H\xFCrriyet Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Adana",
      "ilce": "Y\xFCre\u011Fir",
      "mahalle": "Za\u011Farl\u0131 Mahallesi",
      "postaKodu": "01415",
      "semt": "Alihocal\u0131"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "15 Temmuz \u015Eehitler Mahallesi",
      "map": '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12629.58740550649!2d37.81000386676849!3d37.68687800025188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x153257788a7ffb57%3A0x29f3ec74b23af0e7!2s15%20Temmuz%20%C5%9Eehitler%2C%20Besni%2FAd%C4%B1yaman!5e0!3m2!1sen!2str!4v1771021818853!5m2!1sen!2str"width="600"height="450"style="border:0;"allowfullscreen=""loading="lazy"referrerpolicy="no-referrer-when-downgrade"></iframe>',
      "postaKodu": "02300",
      "semt": "Besni"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Ab\u0131m\u0131st\u0131k Mahallesi (\xC7ak\u0131rh\xFCy\xFCk Beldesi)",
      "map": '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12653.515408215837!2d37.88110826668672!3d37.54613705083393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15324e1a894b6bc5%3A0x68b265a6bc411f05!2zQWLEsW3EsXN0xLFrLCDDh2FrxLFyaMO8ecO8ay9CZXNuaS9BZMSxeWFtYW4!5e0!3m2!1sen!2str!4v1771027919268!5m2!1sen!2str"width="600"height="450"style="border:0;"allowfullscreen=""loading="lazy"referrerpolicy="no-referrer-when-downgrade"></iframe>',
      "postaKodu": "02320",
      "semt": "\xC7ak\u0131rh\xFCy\xFCk"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Adalet Mahallesi (Suvarl\u0131 Beldesi)",
      "map": '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25302.035892152697!2d37.59016299738385!3d37.560847753075315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15326a0d901baa63%3A0x6d93bf526667f89c!2zQWRhbGV0LCAwMjMzMCBTdXZhcmzEsS9CZXNuaS9BZMSxeWFtYW4!5e0!3m2!1sen!2str!4v1771028070558!5m2!1sen!2str"width="600"height="450"style="border:0;"allowfullscreen=""loading="lazy"referrerpolicy="no-referrer-when-downgrade"></iframe>',
      "postaKodu": "02330",
      "semt": "Suvarl\u0131"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Ahuri Mahallesi (Sar\u0131kaya K\xF6y\xFC)",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Akdere Mahallesi (Ba\u015Fl\u0131 K\xF6y\xFC)",
      "postaKodu": "02340",
      "semt": "\u015Eambayat"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Akdo\u011Fanlar Mahallesi (Berete K\xF6y\xFC)",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Akdurak K\xF6y\xFC",
      "postaKodu": "02320",
      "semt": "\xC7ak\u0131rh\xFCy\xFCk"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Akkuyu K\xF6\xFC",
      "postaKodu": "02320",
      "semt": "\xC7ak\u0131rh\xFCy\xFCk"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Akkuyu Mahallesi (Atmal\u0131 K\xF6y\xFC)",
      "postaKodu": "02340",
      "semt": "\u015Eambayat"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Akp\u0131nar K\xF6y\xFC",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Aktepe K\xF6y\xFC",
      "postaKodu": "02320",
      "semt": "\xC7ak\u0131rh\xFCy\xFCk"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Akyaz\u0131 K\xF6y\xFC",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Ali Erdemo\u011Flu Mahallesi",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Al\u0131\xE7l\u0131 K\xF6y\xFC",
      "postaKodu": "02320",
      "semt": "\xC7ak\u0131rh\xFCy\xFCk"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Ali\u015Far K\xF6y\xFC",
      "postaKodu": "02340",
      "semt": "\u015Eambayat"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "A\u015Fa\u011F\u0131\xE7\xF6pl\xFC K\xF6y\xFC",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "A\u015Fa\u011F\u0131sarhan Mahallesi",
      "postaKodu": "02300",
      "semt": "Besni"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "A\u015Fa\u011F\u0131s\xF6\u011F\xFCtl\xFC Mahallesi (K\xF6seli Beldesi)",
      "postaKodu": "02348",
      "semt": "K\xF6seli"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Atat\xFCrk Mahallesi (Kesmetepe Beldesi)",
      "postaKodu": "02346",
      "semt": "Kesmetepe"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Atat\xFCrk Mahallesi (Sug\xF6z\xFC K\xF6y\xFC)",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Atat\xFCrk Mahallesi (\xDC\xE7g\xF6z K\xF6y\xFC)",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Atmal\u0131 K\xF6y\xFC",
      "postaKodu": "02340",
      "semt": "\u015Eambayat"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Bahri Mahallesi (Bahri K\xF6y\xFC)",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Balka Mahallesi (Be\u015Fyol K\xF6y\xFC)",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Ba\u015Fl\u0131 K\xF6y\xFC",
      "postaKodu": "02340",
      "semt": "\u015Eambayat"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Bayat Mahallesi (\u015Eambayat Beldesi)",
      "postaKodu": "02340",
      "semt": "\u015Eambayat"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Bereketli K\xF6y\xFC",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Be\u015Fir Mahallesi (Teka\u011Fa\xE7 K\xF6y\xFC)",
      "postaKodu": "02340",
      "semt": "\u015Eambayat"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Be\u015Fkoz K\xF6y\xFC",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Be\u015Fyol K\xF6y\xFC",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Boncuk K\xF6y\xFC",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Bostanc\u0131k Mahallesi (Teka\u011Fa\xE7 K\xF6y\xFC)",
      "postaKodu": "02340",
      "semt": "\u015Eambayat"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Boybeyp\u0131nar\u0131 Mahallesi (\xC7ak\u0131rh\xFCy\xFCk Beldesi)",
      "postaKodu": "02320",
      "semt": "\xC7ak\u0131rh\xFCy\xFCk"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Burun\xE7ay\u0131r K\xF6y\xFC",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "B\xFCy\xFCkoba Mahallesi (Karalar K\xF6y\xFC)",
      "postaKodu": "02330",
      "semt": "Suvarl\u0131"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "\xC7akall\u0131 Mahallesi (\xC7orak K\xF6y\xFC)",
      "postaKodu": "02330",
      "semt": "Suvarl\u0131"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "\xC7akall\u0131 Mahallesi (Karalar K\xF6y\xFC)",
      "postaKodu": "02330",
      "semt": "Suvarl\u0131"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "\xC7akmak Mahallesi (Akdurak K\xF6y\xFC)",
      "postaKodu": "02320",
      "semt": "\xC7ak\u0131rh\xFCy\xFCk"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "\xC7akmak Mahallesi (Kesmetepe Beldesi)",
      "postaKodu": "02346",
      "semt": "Kesmetepe"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "\xC7aml\u0131ca K\xF6y\xFC",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Camu\u015F\xE7u K\xF6y\xFC",
      "postaKodu": "02320",
      "semt": "\xC7ak\u0131rh\xFCy\xFCk"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "\xC7at Mahallesi",
      "postaKodu": "02300",
      "semt": "Besni"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "\xC7ay\u0131robas\u0131 Mahallesi (Karalar K\xF6y\xFC)",
      "postaKodu": "02330",
      "semt": "Suvarl\u0131"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "\xC7aykaya K\xF6y\xFC",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "\xC7ilbo\u011Faz K\xF6y\xFC",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Cirit Meydan\u0131 Mahallesi",
      "postaKodu": "02300",
      "semt": "Besni"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "\xC7omak K\xF6y\xFC",
      "postaKodu": "02320",
      "semt": "\xC7ak\u0131rh\xFCy\xFCk"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "\xC7\xF6pl\xFCk\u0131\u015Fla Mahallesi (Yenik\xF6y K\xF6y\xFC)",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "\xC7orak K\xF6y\xFC",
      "postaKodu": "02330",
      "semt": "Suvarl\u0131"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "\xC7orman Mahallesi (Tokar K\xF6y\xFC)",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Cumhuriyet Mahallesi (K\xF6seli Beldesi)",
      "postaKodu": "02348",
      "semt": "K\xF6seli"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Cumhuriyet Mahallesi (\u015Eambayat Beldesi)",
      "postaKodu": "02340",
      "semt": "\u015Eambayat"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Cumhuriyet Mahallesi (Sar\u0131yaprak K\xF6y\xFC)",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Cumhuriyet Mahallesi (Suvarl\u0131 Beldesi)",
      "postaKodu": "02330",
      "semt": "Suvarl\u0131"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Cumhuriyet Mahallesi (\xDC\xE7g\xF6z K\xF6y\xFC)",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Deliseki Mahallesi (\xC7aml\u0131ca K\xF6y\xFC)",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Dikilita\u015F K\xF6y\xFC",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Do\u011Fankaya K\xF6y\xFC",
      "postaKodu": "02340",
      "semt": "\u015Eambayat"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "D\xF6rtyol K\xF6y\xFC",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Dumlup\u0131nar Mahallesi",
      "postaKodu": "02300",
      "semt": "Besni"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "E\u011Ferli K\xF6y\xFC",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Erdemo\u011Flu Mahallesi",
      "postaKodu": "02300",
      "semt": "Besni"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Fatih Mahallesi (Kesmetepe Beldesi)",
      "postaKodu": "02346",
      "semt": "Kesmetepe"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Fatih Mahallesi (\u015Eambayat Beldesi)",
      "postaKodu": "02340",
      "semt": "\u015Eambayat"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Fatih Mahallesi (Sar\u0131yaprak K\xF6y\xFC)",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Ge\xE7itli K\xF6y\xFC",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "G\xF6nderme Mahallesi (Konuklu K\xF6y\xFC)",
      "postaKodu": "02320",
      "semt": "\xC7ak\u0131rh\xFCy\xFCk"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "G\xFCm\xFC\u015Fl\xFC K\xF6y\xFC",
      "postaKodu": "02340",
      "semt": "\u015Eambayat"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "G\xFCneyka\u015F K\xF6y\xFC",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Hac\u0131halil K\xF6y\xFC",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Harmanard\u0131 K\xF6y\xFC",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Hasanl\u0131 K\xF6y\xFC",
      "postaKodu": "02320",
      "semt": "\xC7ak\u0131rh\xFCy\xFCk"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "H\xF6y\xFCk Mahallesi (Be\u015Fyol K\xF6y\xFC)",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "H\xF6y\xFCk Mahallesi (Comak K\xF6y\xFC)",
      "postaKodu": "02320",
      "semt": "\xC7ak\u0131rh\xFCy\xFCk"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "H\xFCrriyet Mahallesi (K\xF6seli Beldesi)",
      "postaKodu": "02348",
      "semt": "K\xF6seli"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "H\xFCrriyet Mahallesi (Suvarl\u0131 Beldesi)",
      "postaKodu": "02330",
      "semt": "Suvarl\u0131"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "\u0130nce Mahallesi (Kesmetepe Beldesi)",
      "postaKodu": "02346",
      "semt": "Kesmetepe"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "\u0130n\xF6n\xFC Mahallesi (Kesmetepe Beldesi)",
      "postaKodu": "02346",
      "semt": "Kesmetepe"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "\u0130n\xF6n\xFC Mahallesi (\u015Eambayat Beldesi)",
      "postaKodu": "02340",
      "semt": "\u015Eambayat"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "\u0130n\xF6n\xFC Mahallesi (Sug\xF6z\xFC K\xF6y\xFC)",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "\u0130n\xF6n\xFC Mahallesi (\xDC\xE7g\xF6z K\xF6y\xFC)",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "\u0130znik Mahallesi (Konuklu K\xF6y\xFC)",
      "postaKodu": "02320",
      "semt": "\xC7ak\u0131rh\xFCy\xFCk"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "\u0130zollu K\xF6y\xFC",
      "postaKodu": "02320",
      "semt": "\xC7ak\u0131rh\xFCy\xFCk"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Karaa\u011Fa\xE7 Mahallesi (Yelbast\u0131 K\xF6y\xFC)",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Karage\xE7i Mahallesi (Be\u015Fyol K\xF6y\xFC)",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Karag\xFCve\xE7 K\xF6y\xFC",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Karahalil Mahallesi (Ba\u015Fl\u0131 K\xF6y\xFC)",
      "postaKodu": "02340",
      "semt": "\u015Eambayat"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Karalar K\xF6y\xFC",
      "postaKodu": "02330",
      "semt": "Suvarl\u0131"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Kargal\u0131 K\xF6y\xFC",
      "postaKodu": "02320",
      "semt": "\xC7ak\u0131rh\xFCy\xFCk"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Karna\xE7\u0131k Mahallesi (Kutluca K\xF6y\xFC)",
      "postaKodu": "02320",
      "semt": "\xC7ak\u0131rh\xFCy\xFCk"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Kaymakam Hasan T\xFCt\xFCn Mahallesi",
      "postaKodu": "02300",
      "semt": "Besni"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Kepirce Mahallesi (Yaz\u0131karakuyu K\xF6y\xFC)",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Kesecik K\xF6y\xFC",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "K\u0131l\u0131\xE7l\u0131 Mahallesi (Ba\u015Fl\u0131 K\xF6y\xFC)",
      "postaKodu": "02340",
      "semt": "\u015Eambayat"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "K\u0131ra\xE7hayma Mahallesi (P\u0131narba\u015F\u0131 K\xF6y\xFC)",
      "postaKodu": "02330",
      "semt": "Suvarl\u0131"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "K\u0131z\u0131lcamustafa Mahallesi (Ba\u015Fl\u0131 K\xF6y\xFC)",
      "postaKodu": "02340",
      "semt": "\u015Eambayat"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "K\u0131z\u0131lhisar K\xF6y\xFC",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "K\u0131zilin K\xF6y\xFC",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "K\u0131z\u0131lkaya K\xF6y\xFC",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "K\u0131z\u0131lp\u0131nar K\xF6y\xFC",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Kocapirli Mahallesi (E\u011Ferli K\xF6y\xFC)",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Konuklu K\xF6y\xFC",
      "postaKodu": "02320",
      "semt": "\xC7ak\u0131rh\xFCy\xFCk"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "K\xF6pr\xFCba\u015F\u0131 Mahallesi (\xC7ak\u0131rh\xFCy\xFCk Beldesi)",
      "postaKodu": "02320",
      "semt": "\xC7ak\u0131rh\xFCy\xFCk"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "K\xF6rtanl\u0131 Mahallesi (P\u0131narba\u015F\u0131 K\xF6y\xFC)",
      "postaKodu": "02330",
      "semt": "Suvarl\u0131"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Korup\u0131nar Mahallesi",
      "postaKodu": "02300",
      "semt": "Besni"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Kurug\xF6l K\xF6y\xFC",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Kutluca K\xF6y\xFC",
      "postaKodu": "02320",
      "semt": "\xC7ak\u0131rh\xFCy\xFCk"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Kuzevleri K\xF6y\xFC",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Levzin Mahallesi (\xC7ak\u0131rh\xFCy\xFCk Beldesi)",
      "postaKodu": "02320",
      "semt": "\xC7ak\u0131rh\xFCy\xFCk"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Menderes Mahallesi (\u015Eambayat Beldesi)",
      "postaKodu": "02340",
      "semt": "\u015Eambayat"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Nohudanl\u0131 Mahallesi (Hac\u0131halil K\xF6y\xFC)",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "\xD6ren K\xF6y\xFC",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Oyal\u0131 Mahallesi",
      "postaKodu": "02300",
      "semt": "Besni"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Oyratl\u0131 K\xF6y\xFC",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "\xD6zba\u011Flar Mahallesi (Atmal\u0131 K\xF6y\xFC)",
      "postaKodu": "02340",
      "semt": "\u015Eambayat"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "P\u0131narba\u015F\u0131 K\xF6y\xFC",
      "postaKodu": "02330",
      "semt": "Suvarl\u0131"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "P\u0131narba\u015F\u0131 Mahallesi",
      "postaKodu": "02300",
      "semt": "Besni"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "P\u0131narba\u015F\u0131osb Mahallesi",
      "postaKodu": "02300",
      "semt": "Besni"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Sar\u0131\xE7i\xE7ek Mahallesi (Konuklu K\xF6y\xFC)",
      "postaKodu": "02320",
      "semt": "\xC7ak\u0131rh\xFCy\xFCk"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Sar\u0131kaya K\xF6y\xFC",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Sat\u0131llu\u015Fa\u011F\u0131 Mahallesi (Oyratl\u0131 K\xF6y\xFC)",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Say\xF6ren K\xF6y\xFC",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Sumakl\u0131 G\xFCzalevler Mahallesi (Kurug\xF6l K\xF6y\xFC)",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Ta\u015Fl\u0131yaz\u0131 K\xF6y\xFC",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Teka\u011Fa\xE7 K\xF6y\xFC",
      "postaKodu": "02340",
      "semt": "\u015Eambayat"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Tetirli Mahallesi (K\xF6seli Beldesi)",
      "postaKodu": "02348",
      "semt": "K\xF6seli"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Tileyli Mahallesi (Yaz\u0131beydili K\xF6y\xFC)",
      "postaKodu": "02320",
      "semt": "\xC7ak\u0131rh\xFCy\xFCk"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Tokar K\xF6y\xFC",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Toklu K\xF6y\xFC",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Topkap\u0131 K\xF6y\xFC",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Turgut \xD6zal Mahallesi (Kesmetepe Beldesi)",
      "postaKodu": "02346",
      "semt": "Kesmetepe"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Tutlup\u0131nar Mahallesi (P\u0131narba\u015F\u0131 K\xF6y\xFC)",
      "postaKodu": "02330",
      "semt": "Suvarl\u0131"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "\xDCrecik Mahallesi (Yelbast\u0131 K\xF6y\xFC)",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Uzunkuyu K\xF6y\xFC",
      "postaKodu": "02330",
      "semt": "Suvarl\u0131"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Yayl\u0131kl\u0131 K\xF6y\xFC",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Yaz\u0131bademce Mahallesi (Yaz\u0131karakuyu K\xF6y\xFC)",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Yaz\u0131beydili K\xF6y\xFC",
      "postaKodu": "02320",
      "semt": "\xC7ak\u0131rh\xFCy\xFCk"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Yaz\u0131karakuyu K\xF6y\xFC",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Yaz\u0131yalangoz Mahallesi (Teka\u011Fa\xE7 K\xF6y\xFC)",
      "postaKodu": "02340",
      "semt": "\u015Eambayat"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Yaz\u0131yurdu Mahallesi (Berete K\xF6y\xFC)",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Yelbast\u0131 K\xF6y\xFC",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Yemlice Mahallesi (Kesecik K\xF6y\xFC)",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Yeni Besni Mahallesi",
      "postaKodu": "02300",
      "semt": "Besni"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Yeni Mahallesi (\u015Eambayat Beldesi)",
      "postaKodu": "02340",
      "semt": "\u015Eambayat"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Yenik\xF6y K\xF6y\xFC",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Yenikurug\xF6l Mahallesi (Akdurak K\xF6y\xFC)",
      "postaKodu": "02320",
      "semt": "\xC7ak\u0131rh\xFCy\xFCk"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Ye\u015Filova Mahallesi (\xC7ak\u0131rh\xFCy\xFCk Beldesi)",
      "postaKodu": "02320",
      "semt": "\xC7ak\u0131rh\xFCy\xFCk"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Ye\u015Filova Mahallesi (\xD6ren K\xF6y\xFC)",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Yold\xFCz\xFC K\xF6y\xFC",
      "postaKodu": "02320",
      "semt": "\xC7ak\u0131rh\xFCy\xFCk"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Yukar\u0131 Hozgi\u015Fi Mahallesi (Yenik\xF6y K\xF6y\xFC)",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Yukar\u0131 Sarhan Mahallesi",
      "postaKodu": "02300",
      "semt": "Besni"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Yukar\u0131s\xF6\u011F\xFCtl\xFC K\xF6y\xFC",
      "postaKodu": "02320",
      "semt": "\xC7ak\u0131rh\xFCy\xFCk"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Yusufa\u011Fa Mahallesi (Akkuyu K\xF6y\xFC)",
      "postaKodu": "02320",
      "semt": "\xC7ak\u0131rh\xFCy\xFCk"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Besni",
      "mahalle": "Zorma\u011Fara Mahallesi (Yenik\xF6y K\xF6y\xFC)",
      "postaKodu": "02302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "Aksu K\xF6y\xFC",
      "postaKodu": "02602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "Akta\u015F Mahallesi (P\u0131narba\u015F\u0131 Beldesi)",
      "postaKodu": "02610",
      "semt": "P\u0131narba\u015F\u0131"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "Alig\xFCr Mahallesi (G\xF6lba\u011F\u0131 K\xF6y\xFC)",
      "postaKodu": "02602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "Alisaha K\xFCmesi Mahallesi (Mutlu K\xF6y\xFC)",
      "postaKodu": "02602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "Alt\u0131nta\u015F K\xF6y\xFC",
      "postaKodu": "02602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "Askerhan K\xF6y\xFC",
      "postaKodu": "02602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "Bah\xE7e K\xFCmesi Mahallesi (Mutlu K\xF6y\xFC)",
      "postaKodu": "02602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "Bah\xE7eli Evler Mahallesi",
      "postaKodu": "02600",
      "semt": "\xC7elikhan"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "Bal\u0131kburun Mahallesi (P\u0131narba\u015F\u0131 Beldesi)",
      "postaKodu": "02610",
      "semt": "P\u0131narba\u015F\u0131"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "Ba\u015Fp\u0131nar Mahallesi",
      "postaKodu": "02600",
      "semt": "\xC7elikhan"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "Bozgedik K\xF6y\xFC",
      "postaKodu": "02602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "Cami Mahallesi",
      "postaKodu": "02600",
      "semt": "\xC7elikhan"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "Cami Mahallesi (P\u0131narba\u015F\u0131 Beldesi)",
      "postaKodu": "02610",
      "semt": "P\u0131narba\u015F\u0131"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "\xC7aml\u0131yayla Mahallesi (P\u0131narba\u015F\u0131 Beldesi)",
      "postaKodu": "02610",
      "semt": "P\u0131narba\u015F\u0131"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "\xC7amp\u0131nar K\xF6y\xFC",
      "postaKodu": "02602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "\xC7at Mahallesi (\u015Eerefhan K\xF6y\xFC)",
      "postaKodu": "02602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "Cemolar Mahallesi (Kalecik K\xF6y\xFC)",
      "postaKodu": "02602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "Cumhuriyet Mahallesi",
      "postaKodu": "02600",
      "semt": "\xC7elikhan"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "De\u011Firmen Ba\u015F\u0131 Mahallesi (\xC7amp\u0131nar K\xF6y\xFC)",
      "postaKodu": "02602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "Deveboynu Mahallesi (Aksu K\xF6y\xFC)",
      "postaKodu": "02602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "D\xFCza\u011Fa\xE7 Mahallesi (Bozgedik K\xF6y\xFC)",
      "postaKodu": "02602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "Eskik\xF6y Mahallesi (Recep K\xF6y\xFC)",
      "postaKodu": "02602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "Eskik\xF6y Mahallesi (Ye\u015Filyayla K\xF6y\xFC)",
      "postaKodu": "02602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "Fatih K\xF6y\xFC",
      "postaKodu": "02602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "Fatih Mahallesi",
      "postaKodu": "02600",
      "semt": "\xC7elikhan"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "G\xF6lba\u011F\u0131 K\xF6y\xFC",
      "postaKodu": "02602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "Hac\u0131lar Mahallesi (P\u0131narba\u015F\u0131 Beldesi)",
      "postaKodu": "02610",
      "semt": "P\u0131narba\u015F\u0131"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "Hamik Mahallesi (K\xF6seu\u015Fa\u011F\u0131 K\xF6y\xFC)",
      "postaKodu": "02602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "Hovirge Yaylas\u0131 Mahallesi (Mutlu K\xF6y\xFC)",
      "postaKodu": "02602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "\u0130ncirli K\xF6y\xFC",
      "postaKodu": "02602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "\u0130n\xF6n\xFC Mahallesi (P\u0131narba\u015F\u0131 Beldesi)",
      "postaKodu": "02610",
      "semt": "P\u0131narba\u015F\u0131"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "Kale Mahallesi (Ye\u015Filtepe K\xF6y\xFC)",
      "postaKodu": "02602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "Kalecik K\xF6y\xFC",
      "postaKodu": "02602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "Kara\xE7ay\u0131r K\xF6y\xFC",
      "postaKodu": "02602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "Karag\xF6l K\xF6y\xFC",
      "postaKodu": "02602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "Kar\u015F\u0131 K\xFCme Evleri Mahallesi (Mutlu K\xF6y\xFC)",
      "postaKodu": "02602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "Kaya Mahallesi (P\u0131narba\u015F\u0131 Beldesi)",
      "postaKodu": "02610",
      "semt": "P\u0131narba\u015F\u0131"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "K\u0131\u015F\u0131kan Yaylas\u0131 Mahallesi (Mutlu K\xF6y\xFC)",
      "postaKodu": "02602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "Korucak K\xF6y\xFC",
      "postaKodu": "02602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "K\xF6seu\u015Fa\u011F\u0131 K\xF6y\xFC",
      "postaKodu": "02602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "Koyuncular Mahallesi (G\xF6lba\u011F\u0131 K\xF6y\xFC)",
      "postaKodu": "02602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "Kurudere Mahallesi (P\u0131narba\u015F\u0131 Beldesi)",
      "postaKodu": "02610",
      "semt": "P\u0131narba\u015F\u0131"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "Mahmut Nedim \xD6kmen Mahallesi",
      "postaKodu": "02600",
      "semt": "\xC7elikhan"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "Merkez K\xFCmesi Mahallesi (Mutlu K\xF6y\xFC)",
      "postaKodu": "02602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "Merkez Mahallesi",
      "postaKodu": "02600",
      "semt": "\xC7elikhan"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "Recep K\xF6y\xFC",
      "postaKodu": "02602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "\u015Eahverdi Mahallesi (Recep K\xF6y\xFC)",
      "postaKodu": "02602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "\u015Eahverdi Yaylaevleri Mahallesi (Recep K\xF6y\xFC)",
      "postaKodu": "02602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "\u015Eerefhan K\xF6y\xFC",
      "postaKodu": "02602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "So\u011Fukp\u0131nar Mahallesi (Korucak K\xF6y\xFC)",
      "postaKodu": "02602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "Ya\u011F\u0131zatl\u0131 K\xF6y\xFC",
      "postaKodu": "02602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "Ya\u011Fmurlu Mahallesi (K\xF6seu\u015Fa\u011F\u0131 K\xF6y\xFC)",
      "postaKodu": "02602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "Yayla Evleri Mahallesi (\xC7amp\u0131nar K\xF6y\xFC)",
      "postaKodu": "02602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "Yaylaevleri Mahallesi (Askerhan K\xF6y\xFC)",
      "postaKodu": "02602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "Ye\u015Filova K\xF6y\xFC",
      "postaKodu": "02602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "Ye\u015Filtepe K\xF6y\xFC",
      "postaKodu": "02602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "Ye\u015Filyayla K\xF6y\xFC",
      "postaKodu": "02602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "Yunus Emre Mahallesi",
      "postaKodu": "02600",
      "semt": "\xC7elikhan"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "\xC7elikhan",
      "mahalle": "Zafer Mahallesi",
      "postaKodu": "02600",
      "semt": "\xC7elikhan"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "A\xE7ma K\xF6y\xFC",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "A\u011Fa\xE7l\u0131 K\xF6y\xFC",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Aksan Mahallesi (Yayladal\u0131 K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Aldu\u015F Mahallesi (Konac\u0131k K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Artilan Mahallesi (Da\u011Fdeviren K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "A\u015Fa\u011F\u0131 Cimik Mahallesi (G\xFCzelsu K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "A\u015Fa\u011F\u0131da\u011Fl\u0131ca K\xF6y\xFC",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Ayd\u0131nl\u0131k Mahallesi (Zu\u011Fur Mahallesi) (Dallarca K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Ba\u011Flar Mahallesi (Ge\xE7itli K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Bayik Mahallesi (Oymakl\u0131 K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Bazik Mahallesi (Yayladal\u0131 K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Bekiran Mahallesi (K\u0131l\u0131\xE7 K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Bemirgo Mahallesi (Konac\u0131k K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Be\u015Fg\xF6ze K\xF6y\xFC",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Beybostan K\xF6y\xFC",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Bilde\u015F Mahallesi (Demirta\u015F K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Bircan Mahallesi (G\xFCng\xF6rm\xFC\u015F K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Bodin Mahallesi (G\xFCndo\u011Fdu K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Budakl\u0131 K\xF6y\xFC",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "\xC7ami\xE7i K\xF6y\xFC",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "\xC7amik Mahallesi (Seyitmahmut K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "\xC7avg\xFCr Mahallesi (\xC7obanp\u0131nar\u0131 K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "\xC7avu\u015F Mahallesi (Siver Mahallesi) (Sutepe K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "\xC7eman Mahallesi (Da\u011Fdeviren K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "\xC7et Mahallesi (\xC7ami\xE7i K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "\xC7etin Mahallesi (K\xFCt\xFCkl\xFC K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Cevizp\u0131nar K\xF6y\xFC",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "\xC7ifthisar K\xF6y\xFC",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "\xC7\u0131narl\u0131k Mahallesi (Yukar\u0131da\u011Fl\u0131ca K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "\xC7\u0131narl\u0131k Mahallesi (G\xFCm\xFC\u015Fka\u015F\u0131k K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "\xC7obanp\u0131nar\u0131 K\xF6y\xFC",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "\xC7ukurca Mahallesi (A\xE7ma K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Da\u011Fdeviren K\xF6y\xFC",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Dallarca K\xF6y\xFC",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Demirta\u015F K\xF6y\xFC",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Despal Mahallesi (Ya\u011Fmurlu K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Deyro Mahallesi (Konac\u0131k K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Dolorizan Mahallesi (G\xF6lyurt K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "D\xF6\u015Fnik Mahallesi (Ka\u015Fyaz\u0131 K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Erdo\u011Fmu\u015F Mahallesi (Baleyrek Mahallesi) (Dallarca K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Eskikent K\xF6y\xFC",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Fatih Mahallesi",
      "postaKodu": "02700",
      "semt": "Gerger"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Ge\xE7itli K\xF6y\xFC",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Gelebaz Mahallesi (K\u0131l\u0131\xE7 K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "G\xF6lani Mahallesi (Onevler K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "G\xF6lyurt K\xF6y\xFC",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "G\xF6me-i Masur Mahallesi (G\xF6lyurt K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "G\xF6m\xFCk Mahallesi (A\u011Fa\xE7l\u0131 K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "G\xF6nen K\xF6y\xFC",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "G\xF6zp\u0131nar K\xF6y\xFC",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "G\xFCdayik Mahallesi (G\xF6nen K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "G\xFCm\xFC\u015Fka\u015F\u0131k K\xF6y\xFC",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "G\xFCndo\u011Fdu K\xF6y\xFC",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "G\xFCneyp\u0131nar Mahallesi (Yenibardak K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "G\xFCng\xF6rm\xFC\u015F K\xF6y\xFC",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "G\xFCrgenli K\xF6y\xFC",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "G\xFCzelsu K\xF6y\xFC",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Hanberti Mahallesi (Bur\xE7akl\u0131 K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Harmuzan Mahallesi (G\xF6zp\u0131nar K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Helezin Mahallesi (G\xF6lyurt K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Hevenk Mahallesi (Eskikent K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Hilim Mahallesi (G\xF6nen K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "H\u0131rc\u0131k Mahallesi (G\xFCrgenli K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Horsaik Mahallesi (Da\u011Fdeviren K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "H\xFCs\xFCkan Mahallesi (G\xF6lyurt K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Kaf Mahallesi (Ge\xE7itli K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Ka\u011F\u0131ndak Mahallesi (G\xF6zp\u0131nar K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Kalecik Mahallesi (K\u0131l\u0131\xE7 K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Karacaviran Mahallesi (G\xFCzelsu K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Kardigin Mahallesi (Yayladal\u0131 K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Karuk Mahallesi (Ka\u015Fyaz\u0131 K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Ka\u015Fyaz\u0131 K\xF6y\xFC",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Keferge Mahallesi (Korulu K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Kelazin Mahallesi (Ya\u011Fmurlu K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Kele\u015Fan Mahallesi",
      "postaKodu": "02700",
      "semt": "Gerger"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Kerzel Mahallesi (Oymakl\u0131 K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Kerzel Mahallesi (Ya\u011Fmurlu K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Keserta\u015F K\xF6y\xFC",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Kevirsor Mahallesi (Bur\xE7akl\u0131 K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "K\u0131l\u0131\xE7 K\xF6y\xFC",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "K\u0131r\u0131ng\xF6l Mahallesi (Yenibardak K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "K\u0131rm\u0131z\u0131tarla Mahallesi (Yenibardak K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Ki\u015Fik Mahallesi (K\u0131l\u0131\xE7 K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "K\u0131zz\u0131k Mahallesi (Bur\xE7akl\u0131 K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "K\xF6kl\xFCce K\xF6y\xFC",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Konac\u0131k K\xF6y\xFC",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "K\xF6rtigin Mahallesi (Bur\xE7akl\u0131 K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Korulu K\xF6y\xFC",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Ko\u015Farlar K\xF6y\xFC",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Koza\u011Fa\xE7\u0131 Mahallesi (Onevler K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "K\xFCt\xFCkl\xFC K\xF6y\xFC",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Maroni Mahallesi (Sarayc\u0131k K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Merkez Mahallesi",
      "postaKodu": "02700",
      "semt": "Gerger"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Merkez Mahallesi (Bur\xE7akl\u0131 K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Mezra Mahallesi (G\xFCrgenli K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Mirza Mahallesi (Dallarca K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Nak\u0131\u015Fl\u0131 K\xF6y\xFC",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Ninyat Mahallesi (G\xF6zp\u0131nar K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "\xD6meran Mahallesi (G\xFCng\xF6rm\xFC\u015F K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Onevler K\xF6y\xFC",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Ortaca K\xF6y\xFC",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Oymakl\u0131 K\xF6y\xFC",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "\xD6zkuran Mahallesi (Nak\u0131\u015Fl\u0131 K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Pamuluk Mahallesi (G\xFCm\xFC\u015Fka\u015F\u0131k K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Pankin Mahallesi (Beybostan K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Pemice Mahallesi (Yenibardak K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "P\u0131narba\u015F\u0131 Mahallesi (G\xF6lyurt K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Piyamli Mahallesi (Sutepe K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Pupar Mahallesi (Oymakl\u0131 K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "\u015Eakol Mahallesi (Yenibardak K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Salavat Mahallesi (Be\u015Fg\xF6ze K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Samak Mahallesi (\xC7ami\xE7i K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "\u015Eamani Mahallesi (G\xFCzelsu K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Sankosi Mahallesi (Korulu K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Sarayc\u0131k K\xF6y\xFC",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "\u015Eavi Mahallesi (G\xF6lyurt K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Sengeto Mahallesi (Cevizp\u0131nar K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "\u015Eeng\xFCl Mahallesi (\xC7ami\xE7i K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Seyitmahmut K\xF6y\xFC",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Sofyan Mahallesi (Ko\u015Farlar K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Sorik Mahallesi (Demirta\u015F K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Sutepe K\xF6y\xFC",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Tank\xFCl Mahallesi (G\xF6lyurt K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Taraksu Mahallesi (\xDC\xE7kaya K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Tillak Mahallesi (Be\u015Fg\xF6ze K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "T\u0131rkidin Mahallesi (G\xFCrgenli K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "T\u0131r\u015Fik Mahallesi (Seyitmahmut K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "\xDC\xE7kaya K\xF6y\xFC",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Vank\xF6k Mahallesi (G\xF6lyurt K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Ya\u011Fmurlu K\xF6y\xFC",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Yayladal\u0131 K\xF6y\xFC",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Yeni Mahallesi",
      "postaKodu": "02700",
      "semt": "Gerger"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Yenibardak K\xF6y\xFC",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Ye\u015Filyurt K\xF6y\xFC",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Yukar\u0131da\u011Fl\u0131ca K\xF6y\xFC",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Gerger",
      "mahalle": "Yuvac\u0131k Mahallesi (A\xE7ma K\xF6y\xFC)",
      "postaKodu": "02702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Ak\xE7abel K\xF6y\xFC",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Ak\xE7akaya K\xF6y\xFC",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Aktoprak K\xF6y\xFC",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Alikaya Mahallesi (Ak\xE7akaya K\xF6y\xFC)",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Arpatarlas\u0131 Mahallesi (Karabah\u015F\u0131l\u0131 K\xF6y\xFC)",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "A\u015Fa\u011F\u0131azapl\u0131 K\xF6y\xFC",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "A\u015Fa\u011F\u0131karakuyu K\xF6y\xFC",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "A\u015Fa\u011F\u0131nas\u0131rl\u0131 K\xF6y\xFC",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Asfalt Mahallesi",
      "postaKodu": "02500",
      "semt": "G\xF6lba\u015F\u0131"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Asfalt Mahallesi (Balkar Beldesi)",
      "postaKodu": "02530",
      "semt": "Balkar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Ba\u011Flarba\u015F\u0131 K\xF6y\xFC",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Ball\u0131k Mahallesi (Savran K\xF6y\xFC)",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Be\u015Fevler Mahallesi (Haydarl\u0131 K\xF6y\xFC)",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Be\u015Fevler Mahallesi (Karabah\u015F\u0131l\u0131 K\xF6y\xFC)",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "\xC7akmak Mahallesi (Harmanl\u0131 Beldesi)",
      "postaKodu": "02520",
      "semt": "Harmanl\u0131"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Cankara K\xF6y\xFC",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "\xC7atala\u011Fa\xE7 K\xF6y\xFC",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "\xC7ataltepe K\xF6y\xFC",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "\xC7ay\u0131r Mahallesi (Karabah\u015F\u0131l\u0131 K\xF6y\xFC)",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "\xC7elikk\xF6y K\xF6y\xFC",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "\xC7elikk\xF6yosb Mahallesi (\xC7elikk\xF6y K\xF6y\xFC)",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Cerrahobas\u0131 Mahallesi (Haydarl\u0131 K\xF6y\xFC)",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Civkur Mahallesi (K\xF6s\xFCkl\xFC K\xF6y\xFC)",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Cumhuriyet Mahallesi",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Cumhuriyet Mahallesi (Balkar Beldesi)",
      "postaKodu": "02530",
      "semt": "Balkar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Cumhuriyet Mahallesi (Bel\xF6ren Beldesi)",
      "postaKodu": "02540",
      "semt": "Bel\xF6ren"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Cumhuriyet Mahallesi (Harmanl\u0131 Beldesi)",
      "postaKodu": "02520",
      "semt": "Harmanl\u0131"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Durak Mahallesi (\xC7atala\u011Fa\xE7 K\xF6y\xFC)",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Durak Mahallesi (\xC7elikk\xF6y K\xF6y\xFC)",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Fatih Mahallesi",
      "postaKodu": "02500",
      "semt": "G\xF6lba\u015F\u0131"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Gedikli K\xF6y\xFC",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Hac\u0131lar K\xF6y\xFC",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Hamzalar K\xF6y\xFC",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Hasanlar Mahallesi (Hamzalar K\xF6y\xFC)",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Haydarl\u0131 K\xF6y\xFC",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "H\xFCrriyet Mahallesi",
      "postaKodu": "02500",
      "semt": "G\xF6lba\u015F\u0131"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "\u0130stasyon Mahallesi (\xC7elikk\xF6y K\xF6y\xFC)",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Kalemkas Mahallesi (Harmanl\u0131 Beldesi)",
      "postaKodu": "02520",
      "semt": "Harmanl\u0131"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Kandil Mahallesi (Hamzalar K\xF6y\xFC)",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Karabah\u015F\u0131l\u0131 K\xF6y\xFC",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Karaburun K\xF6y\xFC",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Kara\xE7ukur Mahallesi (Karabah\u015F\u0131l\u0131 K\xF6y\xFC)",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Karahasan Mahallesi (\xC7ataltepe K\xF6y\xFC)",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Ke\xE7iba\u015F\u0131 Mahallesi (Meydan K\xF6y\xFC)",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Keralmaz Mahallesi (\xC7atala\u011Fa\xE7 K\xF6y\xFC)",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Kezbi Mahallesi (Savran K\xF6y\xFC)",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "K\xF6rp\u0131nar\u0131 Mahallesi (Meydan K\xF6y\xFC)",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "K\xF6s\xFCkl\xFC K\xF6y\xFC",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "K\xF6tel Mahallesi (Karabah\u015F\u0131l\u0131 K\xF6y\xFC)",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "K\xFC\xE7\xFCk\xF6ren K\xF6y\xFC",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Kumlu Mezras\u0131 Mahallesi (Aktoprak K\xF6y\xFC)",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Kurucuova Mahallesi (Savran K\xF6y\xFC)",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Kuruge\xE7it Mahallesi",
      "postaKodu": "02500",
      "semt": "G\xF6lba\u015F\u0131"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Merkez Mahallesi (Bel\xF6ren Beldesi)",
      "postaKodu": "02540",
      "semt": "Bel\xF6ren"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Meydan K\xF6y\xFC",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "M\u0131\xE7olar Mahallesi (\xC7ataltepe K\xF6y\xFC)",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Mimar Sinan Mahallesi",
      "postaKodu": "02500",
      "semt": "G\xF6lba\u015F\u0131"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "\xD6renli K\xF6y\xFC",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Ozan K\xF6y\xFC",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Savran K\xF6y\xFC",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Serpenolar Mahallesi (Haydarl\u0131 K\xF6y\xFC)",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "S\u0131r\u0131kl\u0131 Mahallesi (Hamzalar K\xF6y\xFC)",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "S\xF6\u011F\xFCtl\xFC Mahallesi (K\xFC\xE7\xFCk\xF6ren K\xF6y\xFC)",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Sorkun Mahallesi (Haydarl\u0131 K\xF6y\xFC)",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Tecirli Mahallesi (\xC7ataltepe K\xF6y\xFC)",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "U\xE7arlar Mahallesi (Hamzalar K\xF6y\xFC)",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Yarba\u015F\u0131 K\xF6y\xFC",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Yavuz Selim Mahallesi",
      "postaKodu": "02500",
      "semt": "G\xF6lba\u015F\u0131"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Yaylac\u0131k K\xF6y\xFC",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Yeni Mahallesi",
      "postaKodu": "02500",
      "semt": "G\xF6lba\u015F\u0131"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Yeni Mahallesi (Harmanl\u0131 Beldesi)",
      "postaKodu": "02520",
      "semt": "Harmanl\u0131"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Yenikent Mahallesi",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Yenik\xF6y K\xF6y\xFC",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Ye\u015Filova K\xF6y\xFC",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Y\u0131kicak Mahallesi (Meydan K\xF6y\xFC)",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Yolba\u011F\u0131 Mahallesi (\xC7ataltepe K\xF6y\xFC)",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Yukar\u0131\xE7\xF6pl\xFC K\xF6y\xFC",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Yukar\u0131karakuyu K\xF6y\xFC",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "G\xF6lba\u015F\u0131",
      "mahalle": "Yukar\u0131nas\u0131rl\u0131 K\xF6y\xFC",
      "postaKodu": "02502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Abdullah Bey Mahallesi (Ar\u0131l\u0131 K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Aco\u011Flu Mahallesi (Geldibuldu K\xF6y\xFC)",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Adal\u0131 K\xF6y\xFC",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Akal\u0131n K\xF6y\xFC",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Ak\xE7a Mahallesi (Ar\u0131l\u0131 K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Ak\xE7akent Mahallesi (Oluklu K\xF6y\xFC)",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Ak\xE7al\u0131 Mahallesi (Akku\u015F K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Ak\xE7averen Mahallesi (\u0130kizce K\xF6y\xFC)",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Akdamar Mahallesi (Bozp\u0131nar K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Akdo\u011Fan K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Ak\u0131nc\u0131lar Atat\xFCrk Mahallesi (Ak\u0131nc\u0131lar Beldesi)",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Akkavak K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Akku\u015F K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Akp\u0131nar Mahallesi (Kavakl\u0131 K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Akta\u015F K\xF6y\xFC",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Aktoprak Mahallesi (Erikli K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Aky\u0131ld\u0131z K\xF6y\xFC",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Alidam K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Ar\u0131l\u0131 K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "A\u015Fa\u011F\u0131 Tu\u011Flu Mahallesi (Tu\u011Flu K\xF6y\xFC)",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Askeran Mahallesi (Yolalt\u0131 K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Atak\xF6y Mahallesi (Ulup\u0131nar K\xF6y\xFC)",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Atat\xFCrk Mahallesi",
      "postaKodu": "02400",
      "semt": "Kahta"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Atat\xFCrk Mahallesi (B\xF6l\xFCkyayla Beldesi)",
      "postaKodu": "02440",
      "semt": "B\xF6l\xFCkyayla"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Atl\u0131 Mahallesi (G\xF6lgeli K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Avnik Mahallesi (G\xF6k\xE7e K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Ayd\u0131nlar Mahallesi (Ar\u0131l\u0131 K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Ayd\u0131np\u0131nar K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Ba\u011Fba\u015F\u0131 K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Ba\u011Flar Mahallesi",
      "postaKodu": "02400",
      "semt": "Kahta"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Ba\u011F\xF6z\xFC K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Bah\xE7e Mahallesi (Bel\xF6ren K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Bah\xE7e Mahallesi (Geldibuldu K\xF6y\xFC)",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Bakacak Mahallesi (Ulup\u0131nar K\xF6y\xFC)",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Ball\u0131 K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Bayraktar Mahallesi",
      "postaKodu": "02400",
      "semt": "Kahta"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Belenli K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Bel\xF6ren K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Berbanos Mahallesi (Tu\u011Flu K\xF6y\xFC)",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Be\u015Fevler Mahallesi (Dut K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Be\u015Fikli K\xF6y\xFC",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Beyp\u0131nar Mahallesi (Kayadibi K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Birbir Mahallesi (\xC7\u0131ral\u0131k K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Bo\u011Fazkaya K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Bostanl\u0131 K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Bozp\u0131nar K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Boztarla K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Buhara Mahallesi (G\xF6\xE7eri K\xF6y\xFC)",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Burmap\u0131nar K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "B\xFCy\xFCkba\u011F K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "B\xFCy\xFCkbejyan K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "B\xFCy\xFCkbey K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "B\xFCy\xFCkg\xF6z Mahallesi (Oluklu K\xF6y\xFC)",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "B\xFCy\xFCtme Mahallesi (Turanl\u0131 K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "\xC7ak\u0131re\u015Fme K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "\xC7alt\u0131l\u0131 K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Cami Mahallesi",
      "postaKodu": "02400",
      "semt": "Kahta"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "\xC7aml\u0131ca K\xF6y\xFC",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "\xC7aml\u0131ca Mahallesi (Ak\u0131nc\u0131lar Beldesi)",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "\xC7ardak K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "\xC7ataltepe K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "\xC7ayba\u015F\u0131 K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "\xC7elebi Mahallesi (\xC7\u0131ral\u0131k K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "\xC7em Mahallesi (Eski Kahta K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "\xC7etinkaya Mahallesi (Koza\u011Fa\xE7 K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "\xC7i\xE7ek Mahallesi (Zeytin K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "\xC7\u0131ral\u0131k K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "\xC7obanl\u0131 Mahallesi",
      "postaKodu": "02400",
      "semt": "Kahta"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "\xC7\xF6rtenek Mahallesi (Eski Kahta K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "\xC7ukurta\u015F K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Cumhuriyet K\xF6y\xFC",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Cumhuriyet Mahallesi",
      "postaKodu": "02400",
      "semt": "Kahta"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Cumhuriyet Mahallesi (B\xF6l\xFCkyayla Beldesi)",
      "postaKodu": "02440",
      "semt": "B\xF6l\xFCkyayla"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Dalince Mahallesi (S\u0131raca K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Damlac\u0131k K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Daml\u0131 Mahallesi (Eceler K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Dam\xFCst\xFC Mahallesi (Eskita\u015F K\xF6y\xFC)",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Darberi Mahallesi (Burmap\u0131nar K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Darda\u011Fan K\xF6y\xFC",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Dereba\u015F\u0131 Mahallesi (\xC7ukurta\u015F K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Dikenli K\xF6y\xFC",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Dikmeta\u015F Mahallesi (Yaprakl\u0131 K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Divan Mahallesi (Erikli K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Do\u011Fantepe Mahallesi (Oluklu K\xF6y\xFC)",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Doluca K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Dumanl\u0131 Mahallesi (\xC7ayba\u015F\u0131 K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Dumlu K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Dut K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Eceler K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Ekinci K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Elbeyi K\xF6y\xFC",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Elmal\u0131 Tu\u011Flu Mahallesi (Tu\u011Flu K\xF6y\xFC)",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Erikdere K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Erikli K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Esendere K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Esentepe Mahallesi (Darda\u011Fan K\xF6y\xFC)",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Eski Kahta K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Eskita\u015F K\xF6y\xFC",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Fatih Mahallesi",
      "postaKodu": "02400",
      "semt": "Kahta"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Fatih Mahallesi (B\xF6l\xFCkyayla Beldesi)",
      "postaKodu": "02440",
      "semt": "B\xF6l\xFCkyayla"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "F\u0131rat Mahallesi",
      "postaKodu": "02400",
      "semt": "Kahta"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "F\u0131st\u0131kl\u0131 K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Gazi Mahallesi",
      "postaKodu": "02400",
      "semt": "Kahta"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Gedik Mahallesi (Alidam K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Geldibuldu K\xF6y\xFC",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Gevazi Mahallesi (Tu\u011Flu K\xF6y\xFC)",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Girne Mahallesi",
      "postaKodu": "02400",
      "semt": "Kahta"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "G\xF6\xE7eri K\xF6y\xFC",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "G\xF6k\xE7e K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "G\xF6lgeli K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "G\xF6ll\xFCk Mahallesi (Koza\u011Fa\xE7 K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "G\xF6mlek Mahallesi (Eski Kahta K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "G\xFCd\xFClge K\xF6y\xFC",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "G\xFClahmet Mahallesi (Tu\u011Flu K\xF6y\xFC)",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "G\xFClveren Mahallesi (Karadut K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "G\xFCm\xFC\u015Fkaya Mahallesi (Damlac\u0131k K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "G\xFCzel\xE7ay K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "G\xFCzelkent Mahallesi (B\xFCy\xFCkba\u011F K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Habipler K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Haceri Mahallesi (\xC7ayba\u015F\u0131 K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Hac\u0131yusuf K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Halice Mahallesi (Narince K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Halifan Mahallesi (Bostanl\u0131 K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Hamzalar K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Hasandi\u011Fin K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Hask\xF6y K\xF6y\xFC",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Hini\xE7 Mahallesi (Adal\u0131 K\xF6y\xFC)",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Hisar Mahallesi (Burmap\u0131nar K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "H\xFCrriyet Mahallesi",
      "postaKodu": "02400",
      "semt": "Kahta"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "H\xFCseyinli Mahallesi (Yeniku\u015Fak K\xF6y\xFC)",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "\u0130kizce K\xF6y\xFC",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "\u0130ngirce Mahallesi (Turanl\u0131 K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "I\u015F\u0131ktepe K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "\u0130slamk\xF6y K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Kahta Osb Mahallesi (Salk\u0131mba\u011F\u0131 K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Kam\u0131\u015Fl\u0131 Mahallesi (\xC7ayba\u015F\u0131 K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Kanbo\u011Faz\u0131 Mahallesi (Karadut K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Kang\xFCl\xFC Mahallesi (B\xF6l\xFCkyayla Beldesi)",
      "postaKodu": "02440",
      "semt": "B\xF6l\xFCkyayla"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Karaba\u011F Mahallesi (Ta\u015Fl\u0131ca K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Karaca\xF6ren K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Karadut K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Karag\xFCl Mahallesi (Narince K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Karaku\u015F Mahallesi (Ba\u011F\xF6z\xFC K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Karama\u011Fara Mahallesi (G\xFCd\xFClge K\xF6y\xFC)",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Karaman K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Karanfil Mahallesi (Damlac\u0131k K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Karap\u0131nar Mahallesi (T\xFCtenocak K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Karata\u015F Mahallesi (Karata\u015F K\xF6y\xFC)",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Karatut Mahallesi (\xC7alt\u0131l\u0131 K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Karmitli Mahallesi (Tu\u011Flu K\xF6y\xFC)",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Kar\u015F\u0131yaka Mahallesi",
      "postaKodu": "02400",
      "semt": "Kahta"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Kavakl\u0131 K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Kayadibi K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Keklik Mahallesi (G\xFCzel\xE7ay K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Keklik Mahallesi (Te\u011Fmenli K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Kelp\u0131nar Mahallesi (Eski Kahta K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Kerkah Mahallesi (Ekinci K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "K\u0131lavuz Mahallesi (Ak\u0131nc\u0131lar Beldesi)",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Kilisik Mahallesi (\xC7\u0131ral\u0131k K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "K\u0131n\u0131k Mahallesi (Hac\u0131yusuf K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Ko\xE7tepe K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "K\xF6pr\xFCba\u015F\u0131 Mahallesi (Esendere K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "K\xF6rg\xFCdan Mahallesi (Yaprakl\u0131 K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Kosa Mahallesi (\xC7ak\u0131re\u015Fme K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "K\xF6seler K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Koza\u011Fa\xE7 K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Kubilay Mahallesi (Ortanca K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "K\xFC\xE7\xFCk Eceler Mahallesi (Eceler K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "K\xFC\xE7\xFCk Tomak Mahallesi (\u0130kizce K\xF6y\xFC)",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Mahmudiye Mahallesi (Darda\u011Fan K\xF6y\xFC)",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Menderes Mahallesi",
      "postaKodu": "02400",
      "semt": "Kahta"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Menderes Mahallesi (Dut K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Menzil K\xF6y\xFC",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "M\xFClkk\xF6y K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Mustafa\xE7ay\u0131r Mahallesi (Ulup\u0131nar K\xF6y\xFC)",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Narince K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Narl\u0131 Mahallesi (Hasandi\u011Fin K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Narl\u0131dere K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Nars\u0131rt\u0131 K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Nergiztepe Mahallesi (Hask\xF6y K\xF6y\xFC)",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Oluklu K\xF6y\xFC",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Ortanca K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Osmanp\u0131nar Mahallesi (Ko\xE7tepe K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Ovac\u0131k K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "\xD6zelevler Mahallesi (Bo\u011Fazkaya K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "P\u0131naryolu Mahallesi (\u0130kizce K\xF6y\xFC)",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "\u015Eahintepe K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "\u015Eahintepe Mahallesi (Karadut K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Sako Mahallesi (Erikdere K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Salik Mahallesi (Karadut K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Salk\u0131mba\u011F\u0131 K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Samanl\u0131 Mahallesi (Eceler K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Sar\u0131su K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Sek\xFCk Mahallesi (Turanl\u0131 K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "\u015Eenk\xF6y K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "\u015Eeyhbaba Mahallesi",
      "postaKodu": "02400",
      "semt": "Kahta"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Sinke Mahallesi (Bo\u011Fazkaya K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "S\u0131raca K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "S\u0131rakaya K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "S\u0131ratut Mahallesi (Adal\u0131 K\xF6y\xFC)",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "\u015Eirinevler Mahallesi (Karadut K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Sofya Mahallesi (Darda\u011Fan K\xF6y\xFC)",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "So\u011Fuksu Mahallesi (Ak\u0131nc\u0131lar Beldesi)",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Sultanma\u011Fara Mahallesi (K\xF6seler K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "S\xFCs\xFCk Mahallesi (G\xFCd\xFClge K\xF6y\xFC)",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Susuz K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Tabakl\u0131 Mahallesi (Belenli K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Ta\u015Fl\u0131ca K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Ta\u015Fl\u0131\xE7ay K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Te\u011Fmenli K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Teknecik K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Tepeba\u015F\u0131 Mahallesi (Hamzalar K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Teriyan Mahallesi (Oluklu K\xF6y\xFC)",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Terziyan Mahallesi (Narince K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Teta Mahallesi (Oluklu K\xF6y\xFC)",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Tibil Mahallesi (Turanl\u0131 K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Tilbe Mahallesi (Geldibuldu K\xF6y\xFC)",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Tu\u011Flu K\xF6y\xFC",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "T\xFCre\u015Fik Mahallesi (G\xFCd\xFClge K\xF6y\xFC)",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Turgut \xD6zal Mahallesi",
      "postaKodu": "02400",
      "semt": "Kahta"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "T\xFCtenocak K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Ulubey Mahallesi (G\xF6lgeli K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Ulup\u0131nar K\xF6y\xFC",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Yaprakl\u0131 K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Yass\u0131kaya Mahallesi (Doluca K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Yavuz Selim Mahallesi",
      "postaKodu": "02400",
      "semt": "Kahta"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Yelkovan K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Yeni Mahallesi",
      "postaKodu": "02400",
      "semt": "Kahta"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Yenice K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Yenice Mahallesi (Ko\xE7tepe K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Yeniku\u015Fak K\xF6y\xFC",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Ye\u015Filkaya Mahallesi (Ye\u015Filkaya K\xF6y\xFC)",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Ye\u015Filtepe Mahallesi (Oluklu K\xF6y\xFC)",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Yolalt\u0131 K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Yol\xE7at\u0131 Mahallesi (Oluklu K\xF6y\xFC)",
      "postaKodu": "02450",
      "semt": "Ak\u0131nc\u0131lar"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Y\xFCksekyayla Mahallesi (Belenli K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Zeynan Mahallesi (Bostanl\u0131 K\xF6y\xFC)",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Zeytin K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Kahta",
      "mahalle": "Ziyaret K\xF6y\xFC",
      "postaKodu": "02402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "100. Y\u0131l Mahallesi (100.Y\u0131l K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Acemp\u0131nar\u0131 Mahallesi (Kayac\u0131k K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Afetevleri Mahallesi (Kaya\xF6n\xFC K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "A\u011Fa\xE7konak K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "A\u011Fcin K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "A\u011Fikan K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "A\u011Fveren K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Ahmethoca K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Ak\xE7al\u0131 K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Ak\xE7ik Mahallesi (Lokman K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Akdere K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Akhisar K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Ak\u0131n Mahallesi (Serhatl\u0131 K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Ak\u0131nc\u0131lar Mahallesi (\xC7er\xE7iyan Mahallesi) (Akdere K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Akp\u0131nar K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Aksu Mahallesi (K\u0131r Mahallesi) (Do\u011Fanl\u0131 K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Akyaz\u0131 K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Akyurt Mahallesi (Uludam K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Albet K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Alibey K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Alita\u015F\u0131 Mahallesi",
      "postaKodu": "02030",
      "semt": "S\xFCmerevler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Alt\u0131n\u015Fehir Mahallesi",
      "postaKodu": "02040",
      "semt": "Yenisanayi"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Alt\u0131ntop Mahallesi (B\xFCy\xFCkkavakl\u0131 K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Altun Mahallesi (Kuyulu K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Armutlu Mahallesi (Hozik Mahallesi) (Kuyucak K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Aslano\u011Flu Mahallesi (Hac\u0131halil K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Asmal\u0131 Mahallesi (Varl\u0131k K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Atak\xF6y K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Atat\xFCrk Mahallesi (Atakent K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Atat\xFCrk Mahallesi (Hasanc\u0131k K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Ayd\u0131nlar K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "B.Ayranl\u0131 Mahallesi (Uzunk\xF6y K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Ba\u011Fdere K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Ba\u011Fl\u0131ca K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Ba\u011Fp\u0131nar K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Ba\u011Fp\u0131nar Kuyucak K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Ba\u011Ftepe Mahallesi (Yedioluk K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Bah\xE7e Mahallesi (\xC7aml\u0131ca K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Bah\xE7e Mahallesi (P\u0131naryayla K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Bah\xE7ecik Mahallesi",
      "postaKodu": "02200",
      "semt": "\u0130mama\u011Fa"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Bah\xE7elievler Mahallesi",
      "postaKodu": "02200",
      "semt": "\u0130mama\u011Fa"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Bah\xE7elievler Mahallesi (K\xF6m\xFCr Beldesi)",
      "postaKodu": "02290",
      "semt": "K\xF6m\xFCr"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Balaban Mahallesi (Atakent K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Barbaros Hayrettin Mahallesi",
      "postaKodu": "02040",
      "semt": "Yenisanayi"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Bardak\xE7\u0131 Mahallesi (Bozh\xFCy\xFCk K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Ba\u015Fp\u0131nar K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Battalh\xFCy\xFCk K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Bebek K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Benav Mahallesi (Dar\u0131ca Mahallesi) (\u0130nceba\u011F K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Beyler Mahallesi (Uludam K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "B\xF6rkenek K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Bozatl\u0131 K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Bozh\xFCy\xFCk K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Boztepe K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "B\xFCkl\xFCm K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Bulam Mahallesi (Do\u011Fanl\u0131 K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Bur\xE7 Mahallesi (Durak K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "B\xFCy\xFCk Boyal\u0131 Mahallesi (Atakent K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "B\xFCy\xFCkkavakl\u0131 K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "B\xFCy\xFCkk\u0131r\u0131kl\u0131 K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "\xC7akmaklar K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "\xC7amgazi K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "\xC7aml\u0131ca K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "\xC7amyurdu K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "\xC7atala\u011Fa\xE7 K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "\xC7atderesi Mahallesi (Yaylakonak Beldesi)",
      "postaKodu": "02270",
      "semt": "Yaylakonak"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "\xC7ay\u0131rl\u0131 K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "\xC7ayl\u0131 Mahallesi (D\xFCdere Mahallesi) (Hasankendi K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "\xC7ayl\u0131 K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "\xC7emberlita\u015F K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "\xC7en\xE7eng K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "\xC7i\xE7ek-1 Mahallesi (Ba\u011Fp\u0131nar Kuyucak K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "\xC7i\xE7ek-2 Mahallesi (Ba\u011Fp\u0131nar Kuyucak K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "\xC7imenke Mahallesi (Yaylakonak Beldesi)",
      "postaKodu": "02270",
      "semt": "Yaylakonak"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "\xC7\u0131nar Mahallesi (Akp\u0131nar K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "\xC7\u0131narik K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "\xC7itlice Mahallesi (\xC7aml\u0131ca K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "\xC7obandede K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "\xC7okp\u0131nar Mahallesi (K\u0131nd\u0131rali K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "\xC7\xF6mlek\xE7i Mahallesi (Birgeni Mahallesi) (Bebek K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Cumhuriyet Mahallesi",
      "postaKodu": "02040",
      "semt": "Yenisanayi"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Cumhuriyet Mahallesi (Atakent K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Cumhuriyet Mahallesi (K\xF6m\xFCr Beldesi)",
      "postaKodu": "02290",
      "semt": "K\xF6m\xFCr"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Daluca Mahallesi (Battalh\xFCy\xFCk K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Damd\u0131rmaz K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Daml\u0131ca K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Darbelik Mahallesi (Akp\u0131nar K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Darda\u011Fan K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Davuthan K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Derinsu K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Di\u015Fbudak K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Do\u011Fanl\u0131 K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "D\xF6rtyol Mahallesi (Davuthan K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Doyran K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Durak K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Durukaynak K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "D\xFCza\u011Fa\xE7 Mahallesi (Uzunk\xF6y K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "D\xFCzce K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Ekinci K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Elmac\u0131k K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Esence K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Esence Mahallesi (K\xF6m\xFCr Beldesi)",
      "postaKodu": "02290",
      "semt": "K\xF6m\xFCr"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Esentepe Mahallesi",
      "postaKodu": "02040",
      "semt": "Yenisanayi"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Eskih\xFCsn\xFCmansur K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Eskisaray Mahallesi",
      "postaKodu": "02100",
      "semt": "Eskisaray"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Eskiviran Mahallesi (Di\u015Fbudak K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Fatih Mahallesi",
      "postaKodu": "02200",
      "semt": "\u0130mama\u011Fa"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Gazi Mahallesi (K\xF6m\xFCr Beldesi)",
      "postaKodu": "02290",
      "semt": "K\xF6m\xFCr"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Gazihan Mahallesi (Ba\u011Fp\u0131nar Kuyucak K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Gedik Mahallesi (\xC7aml\u0131ca K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Girik K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "G\u0131srik Mahallesi (Derinsu K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "G\xF6k\xE7ay K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "G\xF6kta\u015F Mahallesi (K\xF6ristan Mahallesi) (U\u011Furca K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "G\xF6ktepe Mahallesi (Ayd\u0131nlar K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "G\xF6lp\u0131nar K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "G\xF6ml\xFCtepe Mahallesi (Uzunk\xF6y K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "G\xF6zeba\u015F\u0131 K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "G\xF6zecik Mahallesi (K\xFC\xE7\xFCk \xC7arkezi Mahallesi) (Uzunp\u0131nar K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "G\xF6ztepe K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "G\xFCltepe Mahallesi (Ba\u011Fdere K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "G\xFCm\xFC\u015Fkaya K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "G\xFCne\u015Fli K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "G\xFCvenli Mahallesi (Ko\xE7ali K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "G\xFCzelevler Mahallesi (Ba\u011Fdere K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "G\xFCzelyurt K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Hac\u0131halil K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Haraba Mahallesi (Akp\u0131nar K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Hasankan Mahallesi (K\xF6m\xFCr Beldesi)",
      "postaKodu": "02290",
      "semt": "K\xF6m\xFCr"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Hasankendi K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Hoca\xF6mer Mahallesi",
      "postaKodu": "02100",
      "semt": "Eskisaray"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "H\xFCrriyet Mahallesi (K\xF6m\xFCr Beldesi)",
      "postaKodu": "02290",
      "semt": "K\xF6m\xFCr"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Il\u0131cak K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "\u0130mama\u011Fa Mahallesi",
      "postaKodu": "02200",
      "semt": "\u0130mama\u011Fa"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "\u0130nceba\u011F K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "\u0130ncekoz Mahallesi (Yaylakonak Beldesi)",
      "postaKodu": "02270",
      "semt": "Yaylakonak"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "\u0130nceler K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "\u0130n\xF6n\xFC Mahallesi (Hasanc\u0131k K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "\u0130pekli K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "I\u015F\u0131kl\u0131 K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Kalburcu K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Kam\u0131\u015Fl\u0131 Mahallesi (Akyaz\u0131 K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Kam\u0131\u015Fl\u0131 Mahallesi (Yazl\u0131k K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Kanik\xFCrk Mahallesi (Ka\u015Fk\xF6y K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Kapcami Mahallesi",
      "postaKodu": "02100",
      "semt": "Eskisaray"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Karaa\u011Fa\xE7 K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Karabur\xE7 Mahallesi (Battalh\xFCy\xFCk K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Kara\xE7al\u0131 Mahallesi (Yaylakonak Beldesi)",
      "postaKodu": "02270",
      "semt": "Yaylakonak"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Karag\xF6l K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Karah\xF6y\xFCk K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Karako\xE7 K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Karak\xF6pr\xFC Mahallesi (B\xFCy\xFCkkavakl\u0131 K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Karaman K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Karap\u0131nar Mahallesi",
      "postaKodu": "02040",
      "semt": "Yenisanayi"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Karruz Mahallesi (Lokman K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Karti Mahallesi (G\xF6zeba\u015F\u0131 K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Ka\u015F\u0131kl\u0131 Mahallesi (Varl\u0131k K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Ka\u015Fk\xF6y K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Kavak K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Kavak Mahallesi (P\u0131naryayla K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Kayaba\u015F\u0131 Mahallesi (Kazni Mahallesi) (Kaya\xF6n\xFC K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Kayac\u0131k K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Kayadibi K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Kayal\u0131 K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Kayal\u0131k Mahallesi",
      "postaKodu": "02200",
      "semt": "\u0130mama\u011Fa"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Kaya\xF6n\xFC K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Kemal\u0131k Mahallesi (Ziyaretpayaml\u0131 K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Kemerkaya K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Ker\xF6mer Mahallesi (Uzunk\xF6y K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "K\u0131l\u0131\xE7lar Mahallesi (Bebek K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Kilisik Mahallesi (G\xFCzelyurt K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "K\u0131nd\u0131rali K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "K\u0131\u015Fla Mahallesi (Yazl\u0131k K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "K\u0131v\u0131rc\u0131k Mahallesi (Hac\u0131halil K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "K\u0131z\u0131lcah\xF6y\xFCk K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "K\u0131z\u0131lcap\u0131nar K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Ko\xE7ali K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "K\xF6kl\xFC Mahallesi (Boztepe K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Konakdere Mahallesi (G\xF6k\xE7ay K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Koruk\xF6y K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Korulu Mahallesi (Mermere Mahallesi) (Yazl\u0131k K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Kotur Mahallesi (Ak\xE7al\u0131 K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Kotur Mahallesi (Do\u011Fanl\u0131 K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Kozan K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "K\xFC\xE7\xFCk Boyal\u0131 Mahallesi (Akp\u0131nar K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "K\xFC\xE7\xFCk Hac\u0131vert Mahallesi (Zey K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "K\xFC\xE7\xFCk Kavakl\u0131 Mahallesi (B\xFCy\xFCkkavakl\u0131 K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "K\xFC\xE7\xFCk K\u0131rg\u0131 Mahallesi (Ekinci K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "K\xFC\xE7\xFCk K\u0131r\u0131kl\u0131 Mahallesi (B\xFCy\xFCkk\u0131r\u0131kl\u0131 K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "K\xFC\xE7\xFCkhasanc\u0131k K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "K\xFC\xE7\xFCkk\u0131rkl\u0131 Mahallesi (B\xFCy\xFCkk\u0131r\u0131kl\u0131 K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "K\xFClafh\xFCy\xFCk K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "K\xFCm\xFC\u015Fderesi Mahallesi (Ko\xE7ali K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "K\xFCrk Mahallesi (Girik K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Ku\u015Fakkaya K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Ku\u015Ftepe K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Kuyucak K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Kuyulu K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Lokman K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Madun Mahallesi (G\xF6zeba\u015F\u0131 K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Mahmut El Ensari Ziyareti Mahallesi (\u0130pekli K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Mahmutlu Mahallesi (Alibey K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Malazgirt Mahallesi",
      "postaKodu": "02200",
      "semt": "\u0130mama\u011Fa"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Malo\u011Flu Mahallesi (Akp\u0131nar K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Malp\u0131nar\u0131 K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Maltepe Mahallesi (Zey K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Mara Mahallesi",
      "postaKodu": "02030",
      "semt": "S\xFCmerevler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Mazl\u0131k Mahallesi (Bebek K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Mehmet Akif Mahallesi",
      "postaKodu": "02200",
      "semt": "\u0130mama\u011Fa"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Merkez Mahallesi (Yaylakonak Beldesi)",
      "postaKodu": "02270",
      "semt": "Yaylakonak"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Mestan K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Millik Mahallesi (D\xFCzce K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Mimar Sinan Mahallesi",
      "postaKodu": "02040",
      "semt": "Yenisanayi"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Miro\u011Flu Mahallesi (Ayd\u0131nlar K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "M\xFCrsel Mahallesi (B\xFCkl\xFCm K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Musalla Mahallesi",
      "postaKodu": "02100",
      "semt": "Eskisaray"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Mustafa Y\xFCcel \xD6zbilgin Mahallesi (K\xF6m\xFCr Beldesi)",
      "postaKodu": "02290",
      "semt": "K\xF6m\xFCr"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Mustafabeyli Mahallesi (Varl\u0131k K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Mutluca Mahallesi (G\xF6k\xE7ay K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Narl\u0131k Mahallesi (Yenik\xF6y K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Olgunlar K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Oluklu K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Ordu Mahallesi (G\xFCne\u015Fli K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "\xD6renli Mahallesi",
      "postaKodu": "02200",
      "semt": "\u0130mama\u011Fa"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Ormani\xE7i K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "\xD6r\xFCmce Mahallesi (Yarmakaya K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "\xD6zelevler Mahallesi (Ba\u011Fdere K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Pa\xE7\u0131k Mahallesi (Bebek K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Palanl\u0131 K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Pa\u015Famezras\u0131 K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Payaml\u0131 K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Petrolosb Mahallesi",
      "postaKodu": "02040",
      "semt": "Yenisanayi"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "P\u0131narba\u015F\u0131 Mahallesi (Durak K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "P\u0131naryayla K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Re\u015Fatl\u0131 Mahallesi (Kuyulu K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Rezip K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Sakall\u0131 Mahallesi (A\u011Fa\xE7konak K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Sar\u0131harman K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Sar\u0131kaya K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "\u015Eemikan K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "\u015Eerefli K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Serhatl\u0131 K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Serintepe Mahallesi (K\xF6m\xFCr Beldesi)",
      "postaKodu": "02290",
      "semt": "K\xF6m\xFCr"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Seyitevler Mahallesi (Ba\u011Fl\u0131ca K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "\u015Eifrak Mahallesi (Serince Mahallesi) (\u0130nceba\u011F K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "S\u0131nc\u0131k Mahallesi (Ba\u011Fl\u0131ca K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "S\u0131ratut Mahallesi",
      "postaKodu": "02100",
      "semt": "Eskisaray"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "\u015Eirazi Mahallesi (Bebek K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Siteler Mahallesi",
      "postaKodu": "02200",
      "semt": "\u0130mama\u011Fa"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "S\xFCmerevler Mahallesi",
      "postaKodu": "02030",
      "semt": "S\xFCmerevler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Taklar Mahallesi (Serhatl\u0131 K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Ta\u015Far Mahallesi (Serhatl\u0131 K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Ta\u015Fgedik K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Ta\u015Foluk Mahallesi (Tetikan Mahallesi) (Derinsu K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Ta\u015Fp\u0131nar K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Tecir K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Tekp\u0131nar K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Tepeba\u015F\u0131 Mahallesi (Hasanc\u0131k K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Tepe\xF6n\xFC Mahallesi (Uzunk\xF6y K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Terman K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Toptepe K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Tun\xE7lar Mahallesi (Serhatl\u0131 K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Turgut Reis Mahallesi",
      "postaKodu": "02200",
      "semt": "\u0130mama\u011Fa"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "T\xFCrkiye Petrolleri Mahallesi",
      "postaKodu": "02040",
      "semt": "Yenisanayi"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Tutluca Mahallesi (Di\u015Fbudak K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "\xDC\xE7direk K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "U\u011Furca K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "U\u011Furlu Mahallesi (Kaya\xF6n\xFC K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Ulubey Mahallesi (Kaya\xF6n\xFC K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Ulucami Mahallesi",
      "postaKodu": "02030",
      "semt": "S\xFCmerevler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Uludam K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "\xDCrg\xFC\xE7 Mahallesi (Atakent K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Uzunk\xF6y K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Uzun\xF6mer Mahallesi (Ba\u011Fdere K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Uzunp\u0131nar K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Vali Halil I\u015F\u0131k Mahallesi (Atakent K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Varl\u0131k K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Varl\u0131k Mahallesi",
      "postaKodu": "02100",
      "semt": "Eskisaray"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Vartana Mahallesi (Ta\u015Fp\u0131nar K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Ya\u011Fl\u0131ca Mahallesi (Varl\u0131k K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Yakac\u0131k Mahallesi (K\xF6m\xFCr Beldesi)",
      "postaKodu": "02290",
      "semt": "K\xF6m\xFCr"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Yarmakaya K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Yass\u0131h\xF6y\xFCk Mahallesi (G\xFCzelyurt K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Yavuz Selim Mahallesi",
      "postaKodu": "02040",
      "semt": "Yenisanayi"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Yaylac\u0131k Mahallesi (Uzunk\xF6y K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Yayladam\u0131 K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Yaz\u0131ba\u015F\u0131 K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Yazl\u0131k K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Yedioluk K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Yeni Mahalle",
      "postaKodu": "02040",
      "semt": "Yenisanayi"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Yeni Sanayi Mahallesi",
      "postaKodu": "02040",
      "semt": "Yenisanayi"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Yenice K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Yenig\xFCven K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Yenik\xF6y K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Yenimahalle (\xC7emberlita\u015F K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Yeninacar Mahallesi (Akp\u0131nar K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Yenip\u0131nar Mahallesi",
      "postaKodu": "02100",
      "semt": "Eskisaray"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Ye\u015Filk\xF6y Mahallesi (\u015Eerefli K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Ye\u015Filova K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Ye\u015Filyurt Mahallesi",
      "postaKodu": "02200",
      "semt": "\u0130mama\u011Fa"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Ye\u015Filyurt Mahallesi (K\xF6m\xFCr Beldesi)",
      "postaKodu": "02290",
      "semt": "K\xF6m\xFCr"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Y\u0131ld\u0131zl\u0131 Mahallesi (Battalh\xFCy\xFCk K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Yo\u011Furtlu Mahallesi (Varl\u0131k K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Yunus Emre Mahallesi",
      "postaKodu": "02200",
      "semt": "\u0130mama\u011Fa"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Yuvac\u0131k Mahallesi (Belikan Mahallesi) (Akdere K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Zey K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Zivar Mahallesi (Yaylakonak Beldesi)",
      "postaKodu": "02270",
      "semt": "Yaylakonak"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Ziyaret Mahallesi (Ziyaretpayaml\u0131 K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Ziyaretpayaml\u0131 K\xF6y\xFC",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Merkez",
      "mahalle": "Zork\xF6y Mahallesi (G\xF6zeba\u015F\u0131 K\xF6y\xFC)",
      "postaKodu": "02010",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Samsat",
      "mahalle": "A\u011Fak\xF6y Mahallesi (Uzuntepe K\xF6y\xFC)",
      "postaKodu": "02802",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Samsat",
      "mahalle": "Akdamar K\xF6y\xFC",
      "postaKodu": "02802",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Samsat",
      "mahalle": "Alt\u0131ntepe Mahallesi (K\u0131rmac\u0131k K\xF6y\xFC)",
      "postaKodu": "02802",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Samsat",
      "mahalle": "Ba\u011Faras\u0131 K\xF6y\xFC",
      "postaKodu": "02802",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Samsat",
      "mahalle": "Bakacak Mahallesi (K\u0131rmac\u0131k K\xF6y\xFC)",
      "postaKodu": "02802",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Samsat",
      "mahalle": "Baraj Mahallesi",
      "postaKodu": "02800",
      "semt": "Samsat"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Samsat",
      "mahalle": "Ba\u015Fakl\u0131 Mahallesi (Bay\u0131rl\u0131 K\xF6y\xFC)",
      "postaKodu": "02802",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Samsat",
      "mahalle": "Bay\u0131rl\u0131 K\xF6y\xFC",
      "postaKodu": "02802",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Samsat",
      "mahalle": "Bek\xE7iler Mahallesi (Tepe\xF6n\xFC K\xF6y\xFC)",
      "postaKodu": "02802",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Samsat",
      "mahalle": "Bekircik Mahallesi (\xC7i\xE7ek K\xF6y\xFC)",
      "postaKodu": "02802",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Samsat",
      "mahalle": "\xC7e\u015Fmeba\u015F\u0131 Mahallesi (K\u0131rmac\u0131k K\xF6y\xFC)",
      "postaKodu": "02802",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Samsat",
      "mahalle": "\xC7i\xE7ek K\xF6y\xFC",
      "postaKodu": "02802",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Samsat",
      "mahalle": "\xC7ille Mahallesi (Do\u011Fanca K\xF6y\xFC)",
      "postaKodu": "02802",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Samsat",
      "mahalle": "Das\u0131nca Mahallesi (Ta\u015Fkuyu K\xF6y\xFC)",
      "postaKodu": "02802",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Samsat",
      "mahalle": "Do\u011Fanca K\xF6y\xFC",
      "postaKodu": "02802",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Samsat",
      "mahalle": "Do\u011Fanlar Mahallesi (\xC7i\xE7ek K\xF6y\xFC)",
      "postaKodu": "02802",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Samsat",
      "mahalle": "G\xF6lp\u0131nar K\xF6y\xFC",
      "postaKodu": "02802",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Samsat",
      "mahalle": "G\xF6ltarla K\xF6y\xFC",
      "postaKodu": "02802",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Samsat",
      "mahalle": "G\xFCm\xFC\u015Fsuyu Mahallesi (\xC7i\xE7ek K\xF6y\xFC)",
      "postaKodu": "02802",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Samsat",
      "mahalle": "\u0130nceali Mahallesi (Yar\u0131mba\u011F K\xF6y\xFC)",
      "postaKodu": "02802",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Samsat",
      "mahalle": "Kale Mahallesi",
      "postaKodu": "02800",
      "semt": "Samsat"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Samsat",
      "mahalle": "Ke\xE7i\xF6ren Mahallesi (G\xF6ltarla K\xF6y\xFC)",
      "postaKodu": "02802",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Samsat",
      "mahalle": "Kergeku\u015Fu Mahallesi (Yar\u0131mba\u011F K\xF6y\xFC)",
      "postaKodu": "02802",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Samsat",
      "mahalle": "K\u0131ra\xE7 Mahallesi (K\u0131rmac\u0131k K\xF6y\xFC)",
      "postaKodu": "02802",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Samsat",
      "mahalle": "K\u0131rmac\u0131k K\xF6y\xFC",
      "postaKodu": "02802",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Samsat",
      "mahalle": "K\u0131z\u0131l\xF6z K\xF6y\xFC",
      "postaKodu": "02802",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Samsat",
      "mahalle": "Kovanoluk K\xF6y\xFC",
      "postaKodu": "02802",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Samsat",
      "mahalle": "Ku\u015Ftepe K\xF6y\xFC",
      "postaKodu": "02802",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Samsat",
      "mahalle": "\xD6renta\u015F Mahallesi",
      "postaKodu": "02800",
      "semt": "Samsat"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Samsat",
      "mahalle": "Ovac\u0131k K\xF6y\xFC",
      "postaKodu": "02802",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Samsat",
      "mahalle": "Sar\u0131k\xF6k Mahallesi (G\xF6ltarla K\xF6y\xFC)",
      "postaKodu": "02802",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Samsat",
      "mahalle": "Sefvank\xF6y Mahallesi (Tepe\xF6n\xFC K\xF6y\xFC)",
      "postaKodu": "02802",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Samsat",
      "mahalle": "Ta\u015Fkuyu K\xF6y\xFC",
      "postaKodu": "02802",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Samsat",
      "mahalle": "Tepe\xF6n\xFC K\xF6y\xFC",
      "postaKodu": "02802",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Samsat",
      "mahalle": "Toka\xE7l\u0131 Mahallesi (Bay\u0131rl\u0131 K\xF6y\xFC)",
      "postaKodu": "02802",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Samsat",
      "mahalle": "Uyan\u0131k Mahallesi (Do\u011Fanca K\xF6y\xFC)",
      "postaKodu": "02802",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Samsat",
      "mahalle": "Uzuntepe K\xF6y\xFC",
      "postaKodu": "02802",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Samsat",
      "mahalle": "Yar\u0131mba\u011F K\xF6y\xFC",
      "postaKodu": "02802",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Samsat",
      "mahalle": "Yavuz Selim Mahallesi",
      "postaKodu": "02800",
      "semt": "Samsat"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Samsat",
      "mahalle": "Ye\u015Filba\u011F Mahallesi (K\u0131rmac\u0131k K\xF6y\xFC)",
      "postaKodu": "02802",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Adaklar Mahallesi (\u015Eahinbeyler K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Aksu K\xF6y\xFC",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Alanc\u0131k K\xF6y\xFC",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Ar\u0131konak K\xF6y\xFC",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Ayd\u0131n Mahallesi (S\xF6\u011F\xFCtl\xFCbah\xE7e K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Ayengin Mahallesi",
      "postaKodu": "02900",
      "semt": "Sincik"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Balkaya K\xF6y\xFC",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Biriman Mahallesi (\u015Eahkolu K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "\xC7a\u011Flayan Mahallesi (H\xFCseyinli K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "\xC7al\u0131l\u0131k Mahallesi (H\xFCseyinli K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "\xC7amdere K\xF6y\xFC",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "\xC7arhanek Mahallesi (\xC7atbah\xE7e K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "\xC7at K\xF6y\xFC",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "\xC7at Mahallesi (Ge\xE7itli K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "\xC7atbah\xE7e K\xF6y\xFC",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "\xC7av\xE7\xFCk Mahallesi (\xC7atbah\xE7e K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "\xC7\u0131nar Mahallesi (\u0130nlice Beldesi)",
      "postaKodu": "02920",
      "semt": "\u0130nlice"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "\xC7\xFCkan Mahallesi (\u0130nlice Beldesi)",
      "postaKodu": "02920",
      "semt": "\u0130nlice"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Cumhuriyet Mahallesi",
      "postaKodu": "02900",
      "semt": "Sincik"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Daml\u0131 Merkez Mahallesi (Ta\u015Fkale K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Derecik Mezras\u0131 Mahallesi (Sak\u0131z K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Dervi\u015Fan Mahallesi (\u015Eahkolu K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Dilektepe K\xF6y\xFC",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "D\xFCdan Mahallesi (\xC7at K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Ekinci Kutan Mahallesi (Ta\u015Fkale K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Elm\u0131rtan Mahallesi (\xC7amdere K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Eskik\xF6y K\xF6y\xFC",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Fatih Mahallesi",
      "postaKodu": "02900",
      "semt": "Sincik"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "F\u0131rat Mahallesi (\u0130nlice Beldesi)",
      "postaKodu": "02920",
      "semt": "\u0130nlice"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "F\u0131r\u0131n Mahallesi (Balkaya K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Ge\xE7itli K\xF6y\xFC",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Ger Mahallesi (Alanc\u0131k K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Gevrik Ya\u011Fmurlu Mahallesi (Aksu K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Gevrol Mahallesi (Ar\u0131konak K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Gollusor Mahallesi (Serince K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "G\xF6v Mahallesi (Ar\u0131konak K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "G\xFCm\xFCkhan Mahallesi (H\xFCseyinli K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "G\xFCzelsu Mahallesi (Hasanl\u0131 K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Hasanl\u0131 K\xF6y\xFC",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Hay\u0131rl\u0131 Mahallesi (Sak\u0131z K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Hazaz Mahallesi (\xC7amdere K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Hesikan Mahallesi (\xC7amdere K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Hijik Mahallesi (\xC7amdere K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Hodri Mahallesi (Yarpuzlu K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "H\xFCrmer Mahallesi (Aksu K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "H\xFCseyinli K\xF6y\xFC",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Karada\u011F Mahallesi (\u0130nlice Beldesi)",
      "postaKodu": "02920",
      "semt": "\u0130nlice"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Karakaya Mahallesi (Hasanl\u0131 K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Karak\xF6se K\xF6y\xFC",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Karaman Mahallesi",
      "postaKodu": "02900",
      "semt": "Sincik"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Kaskanl\u0131 Mahallesi (Dilektepe K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Kocagazi Mezras\u0131 Mahallesi (Sak\u0131z K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "K\xFC\xE7\xFCk Evler Mahallesi (Sak\u0131z K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "K\xFC\xE7\xFCk\xE7ay Mahallesi (Dilektepe K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "K\xFCpl\xFCce Mahallesi (\u015Eahinbeyler K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "K\xFCrelifan Mahallesi (\u015Eahinbeyler K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "K\xFCsran Mahallesi (Alanc\u0131k K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Mahmuto\u011Flu Mahallesi",
      "postaKodu": "02900",
      "semt": "Sincik"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Mengil Mahallesi (Ar\u0131konak K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Merkez Mahallesi",
      "postaKodu": "02900",
      "semt": "Sincik"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Narl\u0131 K\xF6y\xFC",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Onur Mahallesi",
      "postaKodu": "02900",
      "semt": "Sincik"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "\xD6zbilgin Mahallesi (\u0130nlice Beldesi)",
      "postaKodu": "02920",
      "semt": "\u0130nlice"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "P\u0131narba\u015F\u0131 K\xF6y\xFC",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Rezan Sa\u011Flam Mahallesi (Ta\u015Fkale K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "\u015Eahinbeyler K\xF6y\xFC",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "\u015Eahintepe Mahallesi (Yarpuzlu K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "\u015Eahkolu K\xF6y\xFC",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Sak\u0131z K\xF6y\xFC",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "\u015Eaml\xFCk Kal\u0131ml\u0131 Mahallesi (Ta\u015Fkale K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Serbent Mahallesi (\xC7amdere K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Serince K\xF6y\xFC",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "So\u011Fanl\u0131 Mahallesi (Serince K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "S\xF6\u011F\xFCtl\xFCbah\xE7e K\xF6y\xFC",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Sorut Mahallesi (Karak\xF6se K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Suba\u015F\u0131 K\xF6y\xFC",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Ta\u015Fkale K\xF6y\xFC",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Ta\u015Fl\u0131ca Mahallesi (\u0130nlice Beldesi)",
      "postaKodu": "02920",
      "semt": "\u0130nlice"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Tepeba\u015F\u0131 Mahallesi (\xC7atbah\xE7e K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Ti\u015Fik Mahallesi (Alanc\u0131k K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Tokluca Mahallesi (Balkaya K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Tuna Mahallesi (\u0130nlice Beldesi)",
      "postaKodu": "02920",
      "semt": "\u0130nlice"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Turmu\u015Fan Mahallesi (Aksu K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Tuzik Mahallesi (Ge\xE7itli K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "U\u011Furlu K\xF6y\xFC",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Yan\u0131kkaya Mahallesi (Hasanl\u0131 K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Yarpuzlu K\xF6y\xFC",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Yass\u0131kaya Mahallesi (Serince K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Yayla Evleri Mahallesi (Sak\u0131z K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Yaylaba\u015F\u0131 Mahallesi (Balkaya K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Y\xFCksekova Mahallesi (H\xFCseyinli K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Zevisimilan Mahallesi (Ta\u015Fkale K\xF6y\xFC)",
      "postaKodu": "02902",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Sincik",
      "mahalle": "Zeynel Aslan Mahallesi",
      "postaKodu": "02900",
      "semt": "Sincik"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Tut",
      "mahalle": "Akbel Mahallesi (\xC7iftlik K\xF6y\xFC)",
      "postaKodu": "02352",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Tut",
      "mahalle": "Ak\xE7atepe K\xF6y\xFC",
      "postaKodu": "02352",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Tut",
      "mahalle": "Ayniye Mahallesi",
      "postaKodu": "02350",
      "semt": "Tut"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Tut",
      "mahalle": "Boyundere K\xF6y\xFC",
      "postaKodu": "02352",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Tut",
      "mahalle": "Bulan\u0131k Mahallesi",
      "postaKodu": "02350",
      "semt": "Tut"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Tut",
      "mahalle": "\xC7aml\u0131ca Mahallesi",
      "postaKodu": "02350",
      "semt": "Tut"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Tut",
      "mahalle": "\xC7iftlik K\xF6y\xFC",
      "postaKodu": "02352",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Tut",
      "mahalle": "Cumhuriyet Mahallesi",
      "postaKodu": "02350",
      "semt": "Tut"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Tut",
      "mahalle": "El\xE7iler K\xF6y\xFC",
      "postaKodu": "02352",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Tut",
      "mahalle": "Fethiye Mahallesi",
      "postaKodu": "02350",
      "semt": "Tut"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Tut",
      "mahalle": "Havutlu K\xF6y\xFC",
      "postaKodu": "02352",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Tut",
      "mahalle": "Ka\u015Fl\u0131ca K\xF6y\xFC",
      "postaKodu": "02352",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Tut",
      "mahalle": "Killili Mahallesi (Yayl\u0131ml\u0131 K\xF6y\xFC)",
      "postaKodu": "02352",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Tut",
      "mahalle": "K\xF6seli K\xF6y\xFC",
      "postaKodu": "02352",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Tut",
      "mahalle": "Meryemu\u015Fa\u011F\u0131 K\xF6y\xFC",
      "postaKodu": "02352",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Tut",
      "mahalle": "\xD6\u011F\xFCtl\xFC K\xF6y\xFC",
      "postaKodu": "02352",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Tut",
      "mahalle": "Pamuklu Mahallesi (Ka\u015Fl\u0131ca K\xF6y\xFC)",
      "postaKodu": "02352",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Tut",
      "mahalle": "P\u0131narl\u0131 Mahallesi (Ye\u015Filyurt K\xF6y\xFC)",
      "postaKodu": "02352",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Tut",
      "mahalle": "Re\u015Fadiye Mahallesi",
      "postaKodu": "02350",
      "semt": "Tut"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Tut",
      "mahalle": "Salah Mahallesi",
      "postaKodu": "02350",
      "semt": "Tut"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Tut",
      "mahalle": "S\xFClmen Mahallesi (\xC7iftlik K\xF6y\xFC)",
      "postaKodu": "02352",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Tut",
      "mahalle": "Tepecik K\xF6y\xFC",
      "postaKodu": "02352",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Tut",
      "mahalle": "\xDCnl\xFCce K\xF6y\xFC",
      "postaKodu": "02352",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Tut",
      "mahalle": "Yalankoz K\xF6y\xFC",
      "postaKodu": "02352",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Tut",
      "mahalle": "Yayl\u0131ml\u0131 K\xF6y\xFC",
      "postaKodu": "02352",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Tut",
      "mahalle": "Ye\u015Filyama\xE7 Mahallesi (Tepecik K\xF6y\xFC)",
      "postaKodu": "02352",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Ad\u0131yaman",
      "ilce": "Tut",
      "mahalle": "Ye\u015Filyurt K\xF6y\xFC",
      "postaKodu": "02352",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Ba\u015Fmak\xE7\u0131",
      "mahalle": "Akke\xE7ili K\xF6y\xFC",
      "postaKodu": "03452",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Ba\u015Fmak\xE7\u0131",
      "mahalle": "Akkoyunlu K\xF6y\xFC",
      "map": '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.1042183147465!2d30.063040661803157!3d37.92799567183029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c67955ba6fe2c5%3A0xe02e94c5f86326b2!2sAkkoyunlu%2C%2003452%20Akkoyunlu%2FBa%C5%9Fmak%C3%A7%C4%B1%2FAfyonkarahisar!5e0!3m2!1sen!2str!4v1770757188462!5m2!1sen!2str"width="600"height="450"style="border:0;"allowfullscreen=""loading="lazy"referrerpolicy="no-referrer-when-downgrade"></iframe>',
      "postaKodu": "03452",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Ba\u015Fmak\xE7\u0131",
      "mahalle": "Akp\u0131nar K\xF6y\xFC",
      "map": '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6303.885892456697!2d29.916073867337982!3d37.814805337433704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c68ecd76ed0951%3A0x4938ed1165d9a374!2zQWtwxLFuYXIsIDAzNDUyIEFrcMSxbmFyL0JhxZ9tYWvDp8SxL0FmeW9ua2FyYWhpc2Fy!5e0!3m2!1sen!2str!4v1770757161547!5m2!1sen!2str"width="600"height="450"style="border:0;"allowfullscreen=""loading="lazy"referrerpolicy="no-referrer-when-downgrade"></iframe>',
      "postaKodu": "03452",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Ba\u015Fmak\xE7\u0131",
      "mahalle": "A\u015Fa\u011F\u0131 Beltarla K\xF6y\xFC",
      "map": '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6297.060717069907!2d30.09385701735143!3d37.89466443735357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c67ee8ec05f8ff%3A0x339a8170a8dd0220!2zQcWfYcSfxLEgQmVsdGFybGEsIDAzNDUyIEHFn2HEn8SxIEJlbHRhcmxhL0JhxZ9tYWvDp8SxL0FmeW9ua2FyYWhpc2Fy!5e0!3m2!1sen!2str!4v1770757209603!5m2!1sen!2str"width="600"height="450"style="border:0;"allowfullscreen=""loading="lazy"referrerpolicy="no-referrer-when-downgrade"></iframe>',
      "postaKodu": "03452",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Ba\u015Fmak\xE7\u0131",
      "mahalle": "A\u015Fa\u011F\u0131 Hilal Mahallesi",
      "postaKodu": "03450",
      "semt": "Ba\u015Fmak\xE7\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Ba\u015Fmak\xE7\u0131",
      "mahalle": "Barbaros Mahallesi",
      "postaKodu": "03450",
      "semt": "Ba\u015Fmak\xE7\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Ba\u015Fmak\xE7\u0131",
      "mahalle": "\xC7a\u011Flayan Mahallesi",
      "postaKodu": "03450",
      "semt": "Ba\u015Fmak\xE7\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Ba\u015Fmak\xE7\u0131",
      "mahalle": "\xC7evlik K\xF6y\xFC",
      "postaKodu": "03452",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Ba\u015Fmak\xE7\u0131",
      "mahalle": "\xC7\u0131\u011Fr\u0131 K\xF6y\xFC/A\u015Fa\u011F\u0131 Mahallesi",
      "postaKodu": "03452",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Ba\u015Fmak\xE7\u0131",
      "mahalle": "\xC7\u0131\u011Fr\u0131 K\xF6y\xFC/Orta Mahallesi",
      "map": '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12608.648903311345!2d30.040855259640743!3d37.80966899975234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c68727c9d7461d%3A0xb99113f8b5ef029c!2zw4fEscSfcsSxLCBPcnRhLCDDh8SxxJ9yxLEvQmHFn21ha8OnxLEvQWZ5b25rYXJhaGlzYXI!5e0!3m2!1sen!2str!4v1770757244183!5m2!1sen!2str"width="600"height="450"style="border:0;"allowfullscreen=""loading="lazy"referrerpolicy="no-referrer-when-downgrade"></iframe>',
      "postaKodu": "03452",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Ba\u015Fmak\xE7\u0131",
      "mahalle": "\xC7\u0131\u011Fr\u0131 K\xF6y\xFC/Yukar\u0131 Mahallesi",
      "postaKodu": "03452",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Ba\u015Fmak\xE7\u0131",
      "mahalle": "Ekinlik K\xF6y\xFC",
      "postaKodu": "03452",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Ba\u015Fmak\xE7\u0131",
      "mahalle": "Fatih Mahallesi",
      "postaKodu": "03450",
      "semt": "Ba\u015Fmak\xE7\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Ba\u015Fmak\xE7\u0131",
      "mahalle": "G\xFClistan Mahallesi",
      "postaKodu": "03450",
      "semt": "Ba\u015Fmak\xE7\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Ba\u015Fmak\xE7\u0131",
      "mahalle": "H\u0131rkak\xF6y K\xF6y\xFC",
      "postaKodu": "03452",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Ba\u015Fmak\xE7\u0131",
      "mahalle": "K\xFCll\xFCce K\xF6y\xFC",
      "postaKodu": "03452",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Ba\u015Fmak\xE7\u0131",
      "mahalle": "Mimar Sinan Mahallesi",
      "postaKodu": "03450",
      "semt": "Ba\u015Fmak\xE7\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Ba\u015Fmak\xE7\u0131",
      "mahalle": "Ovac\u0131k K\xF6y\xFC/Emmiler Mahallesi",
      "postaKodu": "03452",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Ba\u015Fmak\xE7\u0131",
      "mahalle": "Ovac\u0131k K\xF6y\xFC/Merkez Mahallesi",
      "postaKodu": "03452",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Ba\u015Fmak\xE7\u0131",
      "mahalle": "Ovac\u0131k K\xF6y\xFC/T\u0131nalar Mahallesi",
      "postaKodu": "03452",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Ba\u015Fmak\xE7\u0131",
      "mahalle": "Sar\u0131k\xF6y K\xF6y\xFC",
      "postaKodu": "03452",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Ba\u015Fmak\xE7\u0131",
      "mahalle": "Yaka K\xF6y\xFC/A\u015Fa\u011F\u0131 Mahallesi",
      "postaKodu": "03452",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Ba\u015Fmak\xE7\u0131",
      "mahalle": "Yaka K\xF6y\xFC/Yukar\u0131 Mahallesi",
      "postaKodu": "03452",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Ba\u015Fmak\xE7\u0131",
      "mahalle": "Yass\u0131\xF6ren K\xF6y\xFC",
      "postaKodu": "03452",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Ba\u015Fmak\xE7\u0131",
      "mahalle": "Yeni Mahallesi",
      "postaKodu": "03450",
      "semt": "Ba\u015Fmak\xE7\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Ba\u015Fmak\xE7\u0131",
      "mahalle": "Yukar\u0131 Hilal Mahallesi",
      "postaKodu": "03450",
      "semt": "Ba\u015Fmak\xE7\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Ba\u015Fmak\xE7\u0131",
      "mahalle": "Yukaribeltarla K\xF6y\xFC",
      "postaKodu": "03452",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bayat",
      "mahalle": "Abdullahl\u0131 Mahallesi (Derbent K\xF6y\xFC)",
      "postaKodu": "03782",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bayat",
      "mahalle": "Akp\u0131nar K\xF6y\xFC",
      "postaKodu": "03782",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bayat",
      "mahalle": "A\u015Fa\u011F\u0131\xE7aybelen K\xF6y\xFC",
      "postaKodu": "03782",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bayat",
      "mahalle": "B\xFCy\xFCk Mahallesi",
      "postaKodu": "03780",
      "semt": "Bayat"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bayat",
      "mahalle": "Ceritli Mahallesi (Derbent K\xF6y\xFC)",
      "postaKodu": "03782",
      "semt": "Bayat"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bayat",
      "mahalle": "\xC7ukurkuyu K\xF6y\xFC",
      "postaKodu": "03782",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bayat",
      "mahalle": "Cumhuriyet Mahallesi",
      "postaKodu": "03780",
      "semt": "Bayat"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bayat",
      "mahalle": "Eskig\xF6m\xFC K\xF6y\xFC",
      "postaKodu": "03782",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bayat",
      "mahalle": "H\xFCrriyet Mahallesi",
      "postaKodu": "03780",
      "semt": "Bayat"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bayat",
      "mahalle": "\u0130mralli K\xF6y\xFC",
      "postaKodu": "03782",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bayat",
      "mahalle": "\u0130np\u0131nar K\xF6y\xFC",
      "postaKodu": "03782",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bayat",
      "mahalle": "Kuzu\xF6ren K\xF6y\xFC",
      "postaKodu": "03782",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bayat",
      "mahalle": "Mall\u0131ca K\xF6y\xFC",
      "postaKodu": "03782",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bayat",
      "mahalle": "Muratkoru K\xF6y\xFC",
      "postaKodu": "03782",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bayat",
      "mahalle": "Sa\u011F\u0131rl\u0131 K\xF6y\xFC",
      "postaKodu": "03782",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bayat",
      "mahalle": "Yeni Mahallesi",
      "postaKodu": "03780",
      "semt": "Bayat"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bayat",
      "mahalle": "Yukar\u0131\xE7aybelen K\xF6y\xFC",
      "postaKodu": "03782",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "Ak\xE7e\u015Fme Mahallesi",
      "postaKodu": "03300",
      "semt": "Bolvadin"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "Alaca Mahallesi",
      "postaKodu": "03300",
      "semt": "Bolvadin"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "Bademli Mahallesi",
      "postaKodu": "03300",
      "semt": "Bolvadin"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "Ba\u011Flarba\u015F\u0131 Mahallesi",
      "postaKodu": "03300",
      "semt": "Bolvadin"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "Ba\u011Flar\xFCst\xFC Mahallesi",
      "postaKodu": "03300",
      "semt": "Bolvadin"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "Bolvadin Osb Mahallesi",
      "postaKodu": "03300",
      "semt": "Bolvadin"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "Bucak Mahallesi",
      "postaKodu": "03300",
      "semt": "Bolvadin"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "B\xFCy\xFCkkaraba\u011F K\xF6y\xFC/Atat\xFCrk Mahallesi",
      "postaKodu": "03302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "B\xFCy\xFCkkaraba\u011F K\xF6y\xFC/Fevzi\xE7akmak Mahallesi",
      "postaKodu": "03302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "B\xFCy\xFCkkaraba\u011F K\xF6y\xFC/Hac\u0131bekir Mahallesi",
      "postaKodu": "03302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "B\xFCy\xFCkkaraba\u011F K\xF6y\xFC/Kar\u015F\u0131yaka Mahallesi",
      "postaKodu": "03302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "Cirit Mahallesi",
      "postaKodu": "03300",
      "semt": "Bolvadin"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "Derekara\u011Fa\xE7 K\xF6y\xFC",
      "postaKodu": "03302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "Dipevler K\xF6y\xFC",
      "postaKodu": "03302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "Di\u015Fli Beldesi/\xC7ayba\u015F\u0131 Mahallesi",
      "postaKodu": "03330",
      "semt": "Di\u015Fli"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "Di\u015Fli Beldesi/Fatih Mahallesi",
      "postaKodu": "03330",
      "semt": "Di\u015Fli"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "Di\u015Fli Beldesi/K\xF6pr\xFCba\u015F\u0131 Mahallesi",
      "postaKodu": "03330",
      "semt": "Di\u015Fli"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "Di\u015Fli Beldesi/Malazgirt Mahallesi",
      "postaKodu": "03330",
      "semt": "Di\u015Fli"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "Di\u015Fli Beldesi/Mevlana Mahallesi",
      "postaKodu": "03330",
      "semt": "Di\u015Fli"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "Di\u015Fli Beldesi/Okul Mahallesi",
      "postaKodu": "03330",
      "semt": "Di\u015Fli"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "Di\u015Fli Beldesi/\u015Eeyh \u015Eamil Mahallesi",
      "postaKodu": "03330",
      "semt": "Di\u015Fli"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "Di\u015Fli Beldesi/Yavuz Selim Mahallesi",
      "postaKodu": "03330",
      "semt": "Di\u015Fli"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "Di\u015Fli Beldesi/Yukar\u0131 Mahallesi",
      "postaKodu": "03330",
      "semt": "Di\u015Fli"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "Di\u015Fli Beldesi/Yunus Emre Mahallesi",
      "postaKodu": "03330",
      "semt": "Di\u015Fli"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "Emrullah Mahallesi",
      "postaKodu": "03300",
      "semt": "Bolvadin"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "Erkmen Mahallesi",
      "postaKodu": "03300",
      "semt": "Bolvadin"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "Ethem Kelek\xE7i Mahallesi",
      "postaKodu": "03300",
      "semt": "Bolvadin"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "G\xF6k\xE7eyayla Mahallesi",
      "postaKodu": "03300",
      "semt": "Bolvadin"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "G\xF6lba\u015F\u0131 Mahallesi",
      "postaKodu": "03300",
      "semt": "Bolvadin"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "G\xFCney K\xF6y\xFC",
      "postaKodu": "03302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "Hac\u0131 Halife Mahallesi",
      "postaKodu": "03300",
      "semt": "Bolvadin"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "Hac\u0131 \xD6mer Mahallesi",
      "postaKodu": "03300",
      "semt": "Bolvadin"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "Hamidiye K\xF6y\xFC",
      "postaKodu": "03302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "Hisar Mahallesi",
      "postaKodu": "03302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "\u0130hsaniye Mahallesi",
      "postaKodu": "03300",
      "semt": "Bolvadin"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "Karaba\u011F Mahallesi",
      "postaKodu": "03300",
      "semt": "Bolvadin"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "Karayoku\u015F K\xF6y\xFC",
      "postaKodu": "03302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "Kaymaz Mahallesi",
      "postaKodu": "03300",
      "semt": "Bolvadin"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "Kemerkaya K\xF6y\xFC/Avdan Mahallesi",
      "postaKodu": "03302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "Kemerkaya K\xF6y\xFC/H\xFCrriyet Mahallesi",
      "postaKodu": "03302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "Kemerkaya K\xF6y\xFC/Sava\u015F Mahallesi",
      "postaKodu": "03302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "Kemerkaya K\xF6y\xFC/Yaka Mahallesi",
      "postaKodu": "03302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "Kemerkaya K\xF6y\xFC/Yaprakl\u0131 Mahallesi",
      "postaKodu": "03302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "Kemerkaya K\xF6y\xFC/Yeni Mahallesi",
      "postaKodu": "03302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "Kemerkaya K\xF6y\xFC/Zafer Mahallesi",
      "postaKodu": "03302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "K\u0131rkg\xF6z Mahallesi",
      "postaKodu": "03300",
      "semt": "Bolvadin"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "Konak Mahallesi",
      "map": '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.686904338436!2d31.049366661415398!3d38.702035658090196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cfae6e0feef9fb%3A0xc4d85d3fe874ff84!2sKonak%2C%2003300%20Bolvadin%2FAfyonkarahisar!5e0!3m2!1str!2str!4v1770556742430!5m2!1str!2str"width="600"height="450"style="border:0;"allowfullscreen=""loading="lazy"referrerpolicy="no-referrer-when-downgrade"></iframe>',
      "postaKodu": "03300",
      "semt": "Bolvadin"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "Kurucaova K\xF6y\xFC",
      "postaKodu": "03302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "Kutlu K\xF6y\xFC",
      "postaKodu": "03302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "Lala Sinan Pa\u015Fa Mahallesi",
      "postaKodu": "03300",
      "semt": "Bolvadin"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "Malazgirt Mahallesi",
      "postaKodu": "03302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "M\xFCsl\xFCmana Mahallesi",
      "postaKodu": "03300",
      "semt": "Bolvadin"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "Nusratl\u0131 K\xF6y\xFC",
      "postaKodu": "03302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "Ortakaraba\u011F K\xF6y\xFC",
      "postaKodu": "03302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "\xD6zburun Beldesi/Bah\xE7elievler Mahallesi",
      "postaKodu": "03350",
      "semt": "\xD6zburun"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "\xD6zburun Beldesi/\xC7ayba\u015F\u0131 Mahallesi",
      "postaKodu": "03350",
      "semt": "\xD6zburun"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "\xD6zburun Beldesi/\u015Eehir\xF6n\xFC Mahallesi",
      "postaKodu": "03350",
      "semt": "\xD6zburun"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "\xD6zburun Beldesi/Ulucami Mahallesi",
      "postaKodu": "03350",
      "semt": "\xD6zburun"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "\xD6zburun Beldesi/\xDCsk\xFCdar Mahallesi",
      "postaKodu": "03350",
      "semt": "\xD6zburun"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "Sel\xE7uklu Mahallesi",
      "postaKodu": "03300",
      "semt": "Bolvadin"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "\u015E\u0131hlar Mahallesi",
      "postaKodu": "03300",
      "semt": "Bolvadin"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "Ta\u015Fa\u011F\u0131l K\xF6y\xFC",
      "postaKodu": "03302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "Ta\u015Fa\u011F\u0131l Mahallesi",
      "postaKodu": "03300",
      "semt": "Bolvadin"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "Ta\u015Fl\u0131dere K\xF6y\xFC",
      "postaKodu": "03302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "Yakup \u015Eevki Pa\u015Fa Mahallesi",
      "postaKodu": "03300",
      "semt": "Bolvadin"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "Yeni Mahallesi",
      "postaKodu": "03302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "Yenice Mahallesi",
      "postaKodu": "03300",
      "semt": "Bolvadin"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Bolvadin",
      "mahalle": "Y\xFCr\xFCkkaraca\xF6ren K\xF6y\xFC",
      "postaKodu": "03302",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "Akkonak K\xF6y\xFC/Akh\xFCrrem Mahallesi",
      "postaKodu": "03702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "Akkonak K\xF6y\xFC/Baltac\u0131 Mahallesi",
      "postaKodu": "03702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "Akkonak K\xF6y\xFC/Cumhuriyet Mahallesi",
      "postaKodu": "03702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "Akkonak K\xF6y\xFC/H\xFCrriyet Mahallesi",
      "postaKodu": "03702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "Akkonak K\xF6y\xFC/Milli Egemenlik Mahallesi",
      "postaKodu": "03702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "Akta\u015F Mahallesi",
      "postaKodu": "03700",
      "semt": "\xC7ay"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "Ali \u0130hsan Pa\u015Fa Mahallesi",
      "postaKodu": "03700",
      "semt": "\xC7ay"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "Ali Kaleli Mahallesi",
      "postaKodu": "03700",
      "semt": "\xC7ay"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "Armutlu K\xF6y\xFC",
      "postaKodu": "03702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "A\u015Fa\u011F\u0131 Mahallesi",
      "postaKodu": "03702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "Aydo\u011Fmu\u015F K\xF6y\xFC",
      "postaKodu": "03702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "Bah\xE7elievler Mahallesi",
      "postaKodu": "03700",
      "semt": "\xC7ay"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "Bulan\u0131k K\xF6y\xFC",
      "postaKodu": "03702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "\xC7ay\u0131rp\u0131nar K\xF6y\xFC",
      "postaKodu": "03702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "\xC7ayiryaz\u0131 K\xF6y\xFC",
      "postaKodu": "03702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "Cedit Mahallesi",
      "postaKodu": "03700",
      "semt": "\xC7ay"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "Cumhuriyet K\xF6y\xFC",
      "postaKodu": "03702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "Demira\u011Fa\xE7 Mahallesi",
      "postaKodu": "03700",
      "semt": "\xC7ay"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "Deresinek K\xF6y\xFC/G\xFCndo\u011Fdu Mahallesi",
      "postaKodu": "03702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "Deresinek K\xF6y\xFC/Kahraman Mahallesi",
      "postaKodu": "03702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "Deresinek K\xF6y\xFC/Zafer Mahallesi",
      "postaKodu": "03702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "Devederesi K\xF6y\xFC",
      "postaKodu": "03702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "Dumlup\u0131nar Mahallesi",
      "postaKodu": "03700",
      "semt": "\xC7ay"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "Eber K\xF6y\xFC/Orta Mahallesi",
      "postaKodu": "03702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "Eber K\xF6y\xFC/Tekke Mahallesi",
      "postaKodu": "03702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "Eber K\xF6y\xFC/Yeni Mahallesi",
      "postaKodu": "03702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "Eber K\xF6y\xFC/Yukar\u0131 Mahallesi",
      "postaKodu": "03702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "Elbiz Mahallesi",
      "postaKodu": "03700",
      "semt": "\xC7ay"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "G\xF6cen K\xF6y\xFC",
      "postaKodu": "03702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "\u0130nli K\xF6y\xFC/Alpaslan Mahallesi",
      "postaKodu": "03702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "\u0130nli K\xF6y\xFC/Cumhuriyet Mahallesi",
      "postaKodu": "03702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "\u0130nli K\xF6y\xFC/Evren Mahallesi",
      "postaKodu": "03702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "\u0130nli K\xF6y\xFC/Kavakl\u0131 Mahallesi",
      "postaKodu": "03702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "\u0130nli K\xF6y\xFC/Kocatepe Mahallesi",
      "postaKodu": "03702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "\u0130nli K\xF6y\xFC/Yayla Mahallesi",
      "postaKodu": "03702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "\u0130stasyon Mahallesi",
      "postaKodu": "03700",
      "semt": "\xC7ay"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "Kad\u0131k\xF6y K\xF6y\xFC",
      "postaKodu": "03702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "Karam\u0131k K\xF6y\xFC/75. Y\u0131l Mahallesi",
      "postaKodu": "03702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "Karam\u0131k K\xF6y\xFC/Cumhuriyet Mahallesi",
      "postaKodu": "03702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "Karam\u0131kkaraca\xF6ren Beldesi/A\u015Fa\u011F\u0131 Mahallesi",
      "postaKodu": "03720",
      "semt": "Karam\u0131kkaraca\xF6ren"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "Karam\u0131kkaraca\xF6ren Beldesi/Ba\u011Flar Mahallesi",
      "postaKodu": "03720",
      "semt": "Karam\u0131kkaraca\xF6ren"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "Karam\u0131kkaraca\xF6ren Beldesi/Seka Mahallesi",
      "postaKodu": "03720",
      "semt": "Karam\u0131kkaraca\xF6ren"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "Karam\u0131kkaraca\xF6ren Beldesi/Yukar\u0131 Mahallesi",
      "postaKodu": "03720",
      "semt": "Karam\u0131kkaraca\xF6ren"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "K\u0131l\u0131\xE7yaka K\xF6y\xFC",
      "postaKodu": "03702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "Ko\xE7beyli K\xF6y\xFC/A\u015Fa\u011F\u0131 Mahallesi",
      "postaKodu": "03702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "Ko\xE7beyli K\xF6y\xFC/G\xF6\xE7mezler Mahallesi",
      "postaKodu": "03702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "Ko\xE7beyli K\xF6y\xFC/G\xFClbaharl\u0131 Mahallesi",
      "postaKodu": "03702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "Ko\xE7beyli K\xF6y\xFC/Yeni Mahallesi",
      "postaKodu": "03702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "K\xF6pr\xFCba\u015F\u0131 Mahallesi",
      "postaKodu": "03700",
      "semt": "\xC7ay"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "Maltepe K\xF6y\xFC",
      "postaKodu": "03702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "Orhaniye K\xF6y\xFC",
      "postaKodu": "03702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "Orta Mahallesi",
      "postaKodu": "03700",
      "semt": "\xC7ay"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "Pazara\u011Fa\xE7 Beldesi/Afyon Mahallesi",
      "postaKodu": "03706",
      "semt": "Pazara\u011Fa\xE7"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "Pazara\u011Fa\xE7 Beldesi/Be\u015Fevler Mahallesi",
      "postaKodu": "03706",
      "semt": "Pazara\u011Fa\xE7"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "Pazara\u011Fa\xE7 Beldesi/Karabulut Mahallesi",
      "postaKodu": "03706",
      "semt": "Pazara\u011Fa\xE7"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "Pazara\u011Fa\xE7 Beldesi/Orta Mahallesi",
      "postaKodu": "03706",
      "semt": "Pazara\u011Fa\xE7"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "Pazara\u011Fa\xE7 Beldesi/Yukar\u0131 Mahallesi",
      "postaKodu": "03706",
      "semt": "Pazara\u011Fa\xE7"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "P\u0131narkaya K\xF6y\xFC",
      "postaKodu": "03702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "\u015Eirinevler Mahallesi",
      "postaKodu": "03700",
      "semt": "\xC7ay"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "Tekke Mahallesi",
      "postaKodu": "03700",
      "semt": "\xC7ay"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "Vak\u0131f Mahallesi",
      "postaKodu": "03700",
      "semt": "\xC7ay"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "Yaka Mahallesi",
      "postaKodu": "03700",
      "semt": "\xC7ay"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "Ye\u015Filevler Mahallesi",
      "postaKodu": "03700",
      "semt": "\xC7ay"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7ay",
      "mahalle": "Ye\u015Filyurt K\xF6y\xFC",
      "postaKodu": "03702",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7obanlar",
      "mahalle": "Bucak Mahallesi",
      "postaKodu": "03060",
      "semt": "\xC7obanlar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7obanlar",
      "mahalle": "G\xF6lc\xFCk Mahallesi",
      "postaKodu": "03060",
      "semt": "\xC7obanlar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7obanlar",
      "mahalle": "G\xF6yn\xFCk K\xF6y\xFC",
      "postaKodu": "03062",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7obanlar",
      "mahalle": "I\u015F\u0131k Mahallesi",
      "postaKodu": "03060",
      "semt": "\xC7obanlar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7obanlar",
      "mahalle": "Kaledeki K\xF6y\xFC",
      "postaKodu": "03062",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7obanlar",
      "mahalle": "Karadede Mahallesi",
      "postaKodu": "03060",
      "semt": "\xC7obanlar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7obanlar",
      "mahalle": "Koca\xF6z Beldesi/Atat\xFCrk Mahallesi",
      "postaKodu": "03107",
      "semt": "Koca\xF6z"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7obanlar",
      "mahalle": "Koca\xF6z Beldesi/Cumhuriyet Mahallesi",
      "postaKodu": "03107",
      "semt": "Koca\xF6z"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7obanlar",
      "mahalle": "Koca\xF6z Beldesi/Fatih Mahallesi",
      "postaKodu": "03107",
      "semt": "Koca\xF6z"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7obanlar",
      "mahalle": "Koca\xF6z Beldesi/\u0130stiklal Mahallesi",
      "postaKodu": "03107",
      "semt": "Koca\xF6z"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7obanlar",
      "mahalle": "S\u0131rakapi Mahallesi",
      "postaKodu": "03060",
      "semt": "\xC7obanlar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7obanlar",
      "mahalle": "Termalkent Mahallesi",
      "postaKodu": "03060",
      "semt": "\xC7obanlar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7obanlar",
      "mahalle": "Yavuz Selim Mahallesi",
      "postaKodu": "03060",
      "semt": "\xC7obanlar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7obanlar",
      "mahalle": "Yeni Mahallesi",
      "postaKodu": "03060",
      "semt": "\xC7obanlar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\xC7obanlar",
      "mahalle": "Zafer Mahallesi",
      "postaKodu": "03060",
      "semt": "\xC7obanlar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dazk\u0131r\u0131",
      "mahalle": "Barbaros Mahallesi",
      "postaKodu": "03950",
      "semt": "Dazk\u0131r\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dazk\u0131r\u0131",
      "mahalle": "\xC7aml\u0131k Mahallesi",
      "postaKodu": "03950",
      "semt": "Dazk\u0131r\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dazk\u0131r\u0131",
      "mahalle": "Esentepe Mahallesi",
      "postaKodu": "03950",
      "semt": "Dazk\u0131r\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dazk\u0131r\u0131",
      "mahalle": "Kurtulu\u015F Mahallesi",
      "postaKodu": "03950",
      "semt": "Dazk\u0131r\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dazk\u0131r\u0131",
      "mahalle": "Vehbi Ko\xE7 Sanayi B\xF6lgesi Mahallesi",
      "postaKodu": "03950",
      "semt": "Dazk\u0131r\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dazk\u0131r\u0131",
      "mahalle": "Yeniyol Mahallesi",
      "postaKodu": "03950",
      "semt": "Dazk\u0131r\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dazk\u0131r\u0131",
      "mahalle": "Ye\u015Filyurt Mahallesi",
      "postaKodu": "03950",
      "semt": "Dazk\u0131r\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dazk\u0131r\u0131",
      "mahalle": "Akarca K\xF6y\xFC",
      "postaKodu": "03952",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dazk\u0131r\u0131",
      "mahalle": "Ar\u0131k\xF6y K\xF6y\xFC",
      "postaKodu": "03952",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dazk\u0131r\u0131",
      "mahalle": "A\u015Fa\u011F\u0131 Yenice K\xF6y\xFC",
      "postaKodu": "03952",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dazk\u0131r\u0131",
      "mahalle": "Bozan K\xF6y\xFC",
      "postaKodu": "03952",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dazk\u0131r\u0131",
      "mahalle": "\xC7iftlik K\xF6y\xFC",
      "postaKodu": "03952",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dazk\u0131r\u0131",
      "mahalle": "Dar\u0131cilar K\xF6y\xFC",
      "postaKodu": "03952",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dazk\u0131r\u0131",
      "mahalle": "Hasandede K\xF6y\xFC",
      "postaKodu": "03952",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dazk\u0131r\u0131",
      "mahalle": "Hisaralan K\xF6y\xFC",
      "postaKodu": "03952",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dazk\u0131r\u0131",
      "mahalle": "\u0130dris K\xF6y\xFC",
      "postaKodu": "03952",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dazk\u0131r\u0131",
      "mahalle": "Karaa\u011Fa\xE7kuyusu K\xF6y\xFC",
      "postaKodu": "03952",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dazk\u0131r\u0131",
      "mahalle": "K\u0131z\u0131l\xF6ren K\xF6y\xFC",
      "postaKodu": "03952",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dazk\u0131r\u0131",
      "mahalle": "\xD6rt\xFCl\xFC K\xF6y\xFC",
      "postaKodu": "03952",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dazk\u0131r\u0131",
      "mahalle": "Sar\u0131kavak K\xF6y\xFC",
      "postaKodu": "03952",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dazk\u0131r\u0131",
      "mahalle": "Yaylak\xF6y K\xF6y\xFC",
      "postaKodu": "03952",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dazk\u0131r\u0131",
      "mahalle": "Yukar\u0131 Yenice K\xF6y\xFC",
      "postaKodu": "03952",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dazk\u0131r\u0131",
      "mahalle": "Y\xFCre\u011Fil K\xF6y\xFC/Demirel Mahallesi",
      "postaKodu": "03952",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dazk\u0131r\u0131",
      "mahalle": "Y\xFCre\u011Fil K\xF6y\xFC/Fatih Mahallesi",
      "postaKodu": "03952",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Adliye Mahallesi",
      "postaKodu": "03400",
      "semt": "Dinar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Af\u015Far K\xF6y\xFC",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Ak\xE7a K\xF6y\xFC",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Ak\xE7in K\xF6y\xFC",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Akg\xFCn K\xF6y\xFC",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Akp\u0131narl\u0131 K\xF6y\xFC",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Aktoprak K\xF6y\xFC",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Aktoprak K\xF6y\xFC/Aktoprak M\xFCcavir Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Alacatl\u0131 K\xF6y\xFC",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Alparslan K\xF6y\xFC",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Alparslan K\xF6y\xFC/A\u015Fa\u011F\u0131 Mh. Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Alparslan K\xF6y\xFC/Yukar\u0131 Mh. Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Altm\u0131\u015Fevler Mahallesi",
      "postaKodu": "03400",
      "semt": "Dinar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Atat\xFCrk Mahallesi",
      "postaKodu": "03400",
      "semt": "Dinar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Avdan K\xF6y\xFC",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Bademli K\xF6y\xFC",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Bademli K\xF6y\xFC/Ayd\u0131nl\u0131 Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Bademli K\xF6y\xFC/Camili Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Bademli K\xF6y\xFC/Orta Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Ba\u011Fc\u0131lar K\xF6y\xFC",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Ba\u011Flar Mahallesi",
      "postaKodu": "03400",
      "semt": "Dinar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Belenp\u0131nar K\xF6y\xFC",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Bilgi\xE7 K\xF6y\xFC",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "B\xFCl\xFCcalan K\xF6y\xFC",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "B\xFCl\xFCcalan K\xF6y\xFC/B\xFCl\xFCcalan M\xFCcavir Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Burunkaya K\xF6y\xFC",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "\xC7a\u011Flayan K\xF6y\xFC",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "\xC7ak\u0131c\u0131 K\xF6y\xFC",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Camikebir Mahallesi",
      "postaKodu": "03400",
      "semt": "Dinar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "\xC7aml\u0131 K\xF6y\xFC",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "\xC7apal\u0131 K\xF6y\xFC",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "\xC7ay\xFCst\xFC K\xF6y\xFC",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Cerityaylas\u0131 K\xF6y\xFC",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "\xC7i\xE7ektepe K\xF6y\xFC/Alparslan Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "\xC7i\xE7ektepe K\xF6y\xFC/Atat\xFCrk Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "\xC7i\xE7ektepe K\xF6y\xFC/Cumhuriyet Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "\xC7i\xE7ektepe K\xF6y\xFC/Fatih Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "\xC7obansaray K\xF6y\xFC",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Cumhuriyet K\xF6y\xFC",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Cumhuriyet K\xF6y\xFC/Ak\xE7a Mh. Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Cumhuriyet K\xF6y\xFC/\xD6merli Mh. Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Cumhuriyet K\xF6y\xFC/Seydilli Mh. Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Cumhuriyet Mahallesi",
      "postaKodu": "03400",
      "semt": "Dinar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Dikici K\xF6y\xFC/Dikici M\xFCcavir Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Dikici K\xF6y\xFC/Erdo\u011Fan Ulusan Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Dikici K\xF6y\xFC/Hasan H\xFCseyin \xC7imen Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Dikici K\xF6y\xFC/Mehmet Tuncay Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Dikici K\xF6y\xFC/Mustafa Acar Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Dikici K\xF6y\xFC/Y\xFCcel Yal\xE7\u0131n Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Do\u011Fanl\u0131 K\xF6y\xFC/Cumhuriyet Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Do\u011Fanl\u0131 K\xF6y\xFC/Gazi Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Do\u011Fanl\u0131 K\xF6y\xFC/\xD6rnek Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Dombay K\xF6y\xFC",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "D\xF6rtyol Mahallesi",
      "postaKodu": "03400",
      "semt": "Dinar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Duman K\xF6y\xFC",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Eldere K\xF6y\xFC",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Emniyet Mahallesi",
      "postaKodu": "03400",
      "semt": "Dinar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Ergenli K\xF6y\xFC",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Fatih Mahallesi",
      "postaKodu": "03400",
      "semt": "Dinar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Gazi Mehmet \xC7avu\u015F Mahallesi",
      "postaKodu": "03400",
      "semt": "Dinar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Gen\xE7ali K\xF6y\xFC/Camili Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Gen\xE7ali K\xF6y\xFC/Gen\xE7al\u0131osb Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Gen\xE7ali K\xF6y\xFC/Gen\xE7eli M\xFCcavir Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Gen\xE7ali K\xF6y\xFC/K\xF6y Kona\u011F\u0131 Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Gen\xE7ali K\xF6y\xFC/Yeni Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "G\xF6\xE7erli K\xF6y\xFC/Dere Mh. Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "G\xF6\xE7erli K\xF6y\xFC/Gedik Alt\u0131 Mevki Mh. Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "G\xF6\xE7erli K\xF6y\xFC/Gedik Ba\u015F\u0131 Mh. Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "G\xF6\xE7erli K\xF6y\xFC/Harman Yeri Mh. Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "G\xF6\xE7erli K\xF6y\xFC/K\xFC\xE7\xFCk Kale \xD6n\xFC Mh. Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "G\xF6\xE7erli K\xF6y\xFC/S\u0131rata\u015F Mh. Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "G\xF6k\xE7eli K\xF6y\xFC",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Haydarli Beldesi/Cumhuriyet Mahallesi",
      "postaKodu": "03480",
      "semt": "Haydarli"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "H\xFCrriyet Mahallesi",
      "postaKodu": "03480",
      "semt": "Haydarl\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "\u0130stiklal Mahallesi",
      "postaKodu": "03480",
      "semt": "Haydarl\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Merkez Mahallesi",
      "postaKodu": "03480",
      "semt": "Haydarl\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Ocakl\u0131 Mahallesi",
      "postaKodu": "03480",
      "semt": "Haydarl\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "\xD6rnek Mahallesi",
      "postaKodu": "03480",
      "semt": "Haydarl\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Yeni Mahallesi",
      "postaKodu": "03480",
      "semt": "Haydarl\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "H\xFCrriyet Mahallesi",
      "postaKodu": "03400",
      "semt": "Dinar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Il\u0131ca Mahallesi",
      "postaKodu": "03400",
      "semt": "Dinar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "\u0130ncirli Mahallesi",
      "postaKodu": "03400",
      "semt": "Dinar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "\u0130stasyon Mahallesi",
      "postaKodu": "03400",
      "semt": "Dinar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "\u0130tfaiye Mahallesi",
      "postaKodu": "03400",
      "semt": "Dinar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Kabakl\u0131 K\xF6y\xFC",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Kad\u0131lar K\xF6y\xFC/Atat\xFCrk Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Kad\u0131lar K\xF6y\xFC/Cumhuriyet Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Kad\u0131lar K\xF6y\xFC/\u0130n\xF6n\xFC Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Kad\u0131lar K\xF6y\xFC/Zafer Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Karabedir K\xF6y\xFC",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Karahac\u0131l\u0131 K\xF6y\xFC",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Karakuyu K\xF6y\xFC/\u0130stasyon Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Karakuyu K\xF6y\xFC/K\xF6y \u0130\xE7i Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Karata\u015F K\xF6y\xFC",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Kazanp\u0131nar K\xF6y\xFC",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Keklice K\xF6y\xFC",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "K\u0131n\u0131k K\xF6y\xFC/Bah\xE7elievler Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "K\u0131n\u0131k K\xF6y\xFC/Esentepe Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "K\u0131n\u0131k K\xF6y\xFC/Fatih Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "K\u0131n\u0131k K\xF6y\xFC/\xD6zt\xFCrk Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "K\u0131z\u0131ll\u0131 K\xF6y\xFC",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Konak Mahallesi",
      "postaKodu": "03400",
      "semt": "Dinar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "K\xF6rpeli K\xF6y\xFC",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Koruba\u015F\u0131 Mahallesi",
      "postaKodu": "03400",
      "semt": "Dinar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Ok\xE7ular K\xF6y\xFC",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Otagar Mahallesi",
      "postaKodu": "03400",
      "semt": "Dinar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Palaz K\xF6y\xFC",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Pancar Mahallesi",
      "postaKodu": "03400",
      "semt": "Dinar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Pazar Mahallesi",
      "postaKodu": "03400",
      "semt": "Dinar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "P\u0131narba\u015F\u0131 Mahallesi",
      "postaKodu": "03400",
      "semt": "Dinar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "P\u0131narl\u0131 K\xF6y\xFC",
      "map": '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6287.0034778258005!2d30.13104564848159!3d38.01208094076817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c677c871f514a7%3A0xd113848d6871759a!2zUMSxbmFybMSxLCAwMzQwMiBQxLFuYXJsxLEvRGluYXIvQWZ5b25rYXJhaGlzYXI!5e0!3m2!1sen!2str!4v1770290041131!5m2!1sen!2str"width="600"height="450"style="border:0;"allowfullscreen=""loading="lazy"referrerpolicy="no-referrer-when-downgrade"></iframe>',
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Sanayi Mahallesi",
      "postaKodu": "03400",
      "semt": "Dinar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Santral Mahallesi",
      "postaKodu": "03400",
      "semt": "Dinar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Stadyum Mahallesi",
      "postaKodu": "03400",
      "semt": "Dinar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Su\xE7\u0131kan Mahallesi",
      "postaKodu": "03400",
      "semt": "Dinar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "S\xFCtla\xE7 K\xF6y\xFC",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Alt\u0131nhisar Mahallesi",
      "postaKodu": "03490",
      "semt": "Tatarl\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "\xC7a\u011Flayan Mahallesi",
      "postaKodu": "03490",
      "semt": "Tatarl\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "\xC7aml\u0131ca Mahallesi",
      "postaKodu": "03490",
      "semt": "Tatarl\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Cumhuriyet Mahallesi",
      "postaKodu": "03490",
      "semt": "Tatarl\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Fatih Mahallesi",
      "postaKodu": "03490",
      "semt": "Tatarl\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Ye\u015Filyurt Mahallesi",
      "postaKodu": "03490",
      "semt": "Tatarl\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Tekin K\xF6y\xFC/11 Evler Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Tekin K\xF6y\xFC/18 Evler Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Tekin K\xF6y\xFC/60 Evler Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Toptepe Mahallesi",
      "postaKodu": "03400",
      "semt": "Dinar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Tugayl\u0131 K\xF6y\xFC",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "T\xFCrkmen K\xF6y\xFC",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "\xDC\xE7lerce Mahallesi",
      "postaKodu": "03400",
      "semt": "Dinar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Uluk\xF6y K\xF6y\xFC/Camikebir Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Uluk\xF6y K\xF6y\xFC/Yeni Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Yaka K\xF6y\xFC",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Yaka K\xF6y\xFC/Yaka M\xFCcavir Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Yapa\u011Fl\u0131 K\xF6y\xFC",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Yelalan K\xF6y\xFC",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Yeni Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Ye\u015Fil\xE7at K\xF6y\xFC",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Ye\u015Fil\xE7at K\xF6y\xFC/Hac\u0131mahmut Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Ye\u015Fil\xE7at K\xF6y\xFC/Orta Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Ye\u015Fil\xE7at K\xF6y\xFC/Peynir Yemez Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Ye\u015Filh\xFCy\xFCk K\xF6y\xFC",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Ye\u015Filyurt K\xF6y\xFC",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Y\u0131prak K\xF6y\xFC/Bah\xE7elievler Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Y\u0131prak K\xF6y\xFC/Esentepe Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Y\u0131prak K\xF6y\xFC/Hisar Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Y\xFCksel K\xF6y\xFC",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Y\xFCksel K\xF6y\xFC/Akkanatl\u0131 Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Dinar",
      "mahalle": "Y\xFCksel K\xF6y\xFC/Sa\u011Fba\u015Fl\u0131 Mahallesi",
      "postaKodu": "03402",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Ablak K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Ada\xE7al Mahallesi",
      "postaKodu": "03600",
      "semt": "Emirda\u011F"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Adalet Mahallesi (Bademli K\xF6y\xFC)",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "A\u011F\u0131lc\u0131k K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Alasakall\u0131 Mahallesi (Davulga Beldesi)",
      "postaKodu": "03630",
      "semt": "Davulga"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Alibeyce K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Arz\u0131l\u0131 Mahallesi (Ba\u015Fkonak K\xF6y\xFC)",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "A\u015Fa\u011F\u0131ali\xE7omak K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "A\u015Fa\u011F\u0131kurudere K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Avdan K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Ayd\u0131nyaka K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Ayn\u0131l\u0131 Mahallesi (Ba\u015Fkonak K\xF6y\xFC)",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Aziziye Mahallesi",
      "postaKodu": "03600",
      "semt": "Emirda\u011F"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Ba\u011Flarba\u015F\u0131 Mahallesi (G\xF6m\xFC Beldesi)",
      "postaKodu": "03680",
      "semt": "G\xF6m\xFC"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Ba\u011Fl\u0131ca K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Balcam K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Ba\u015Fali Mahallesi (Ba\u015Fkonak K\xF6y\xFC)",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Beyk\xF6y K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Bey\xF6ren K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Burunarka\xE7 K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "B\xFCy\xFCktu\u011Fluk K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Camili K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "\xC7atall\u0131 K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "\xC7ayk\u0131\u015Fla K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "\xC7iftlikk\xF6y K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "\xC7illi Mahallesi",
      "postaKodu": "03600",
      "semt": "Emirda\u011F"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Civikli Mahallesi (Ba\u015Fkonak K\xF6y\xFC)",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Cumhuriyet Mahallesi",
      "postaKodu": "03600",
      "semt": "Emirda\u011F"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Cumhuriyet Mahallesi (Adayaz\u0131 K\xF6y\xFC)",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Cumhuriyet Mahallesi (A\u015Fa\u011F\u0131piribeyli K\xF6y\xFC)",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Da\u011F\u0131lgan K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Da\u011F\u0131n\u0131k K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Daydal\u0131 K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Demircili K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Dere Mahallesi (A\u015Fa\u011F\u0131kurudere K\xF6y\xFC)",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Derek\xF6y K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Domurlu Mahallesi (Davulga Beldesi)",
      "postaKodu": "03630",
      "semt": "Davulga"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "D\xF6neli Mahallesi (Y\xFCre\u011Fil K\xF6y\xFC)",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "D\xF6rtyol Mahallesi (G\xF6m\xFC Beldesi)",
      "postaKodu": "03680",
      "semt": "G\xF6m\xFC"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Ekizce K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Elhan K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Emirbaba Mahallesi",
      "postaKodu": "03600",
      "semt": "Emirda\u011F"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Emirink\xF6y\xFC K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Eski Kacerli Mahallesi",
      "postaKodu": "03600",
      "semt": "Emirda\u011F"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Eskiak\xF6ren K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "E\u015Frefli K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Fak\u0131l\u0131 Mahallesi (Tezk\xF6y K\xF6y\xFC)",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Fatih Mahallesi (G\xF6m\xFC Beldesi)",
      "postaKodu": "03680",
      "semt": "G\xF6m\xFC"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Gedikevi K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Gelincik K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "G\xF6k\xE7eyaka Mahallesi (G\xF6m\xFC Beldesi)",
      "postaKodu": "03680",
      "semt": "G\xF6m\xFC"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "G\xF6zeli K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "G\xFCney K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "G\xFCneysaray K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "G\xFCve\xE7\xE7i K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "G\xFCzle Mahallesi (Tezk\xF6y K\xF6y\xFC)",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Hac\u0131 H\xFCseyinli Mahallesi (Ba\u015Fkonak K\xF6y\xFC)",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Hac\u0131 \u0130sali Mahallesi (Ba\u015Fkonak K\xF6y\xFC)",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Hac\u0131 Mustafal\u0131 Mahallesi (Ba\u015Fkonak K\xF6y\xFC)",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Hamzahac\u0131l\u0131 K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Hisark\xF6y Mahallesi (Davulga Beldesi)",
      "postaKodu": "03630",
      "semt": "Davulga"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "\u0130nceli Mahallesi (Tezk\xF6y K\xF6y\xFC)",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "\u0130ncik Mahallesi (Davulga Beldesi)",
      "postaKodu": "03630",
      "semt": "Davulga"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "\u0130ncili Mahallesi",
      "postaKodu": "03600",
      "semt": "Emirda\u011F"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "\u0130nkilap Mahallesi",
      "postaKodu": "03600",
      "semt": "Emirda\u011F"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Karaa\u011Fa\xE7 K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Karacalar K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Karakuyu Mahallesi (Davulga Beldesi)",
      "postaKodu": "03630",
      "semt": "Davulga"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Karayatak K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Kar\u015F\u0131yaka Mahallesi",
      "postaKodu": "03600",
      "semt": "Emirda\u011F"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Kar\u015F\u0131yaka Mahallesi (A\u015Fa\u011F\u0131piribeyli K\xF6y\xFC)",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Kavlakl\u0131 Mahallesi (K\u0131l\u0131\xE7l\u0131 Kavlakl\u0131 K\xF6y\xFC)",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "K\u0131l\u0131\xE7lar K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "K\u0131l\u0131\xE7l\u0131 Mahallesi (K\u0131l\u0131\xE7l\u0131 Kavlakl\u0131 K\xF6y\xFC)",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "K\u0131rkp\u0131nar K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "K\xF6seli Mahallesi (Y\xFCre\u011Fil K\xF6y\xFC)",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Koyunlu Mahallesi (K\u0131l\u0131\xE7l\u0131 Kavlakl\u0131 K\xF6y\xFC)",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Kuruca K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Kurucaosb Mahallesi (Kuruca K\xF6y\xFC)",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Leylekli K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Mahrumlu Mahallesi (Yukar\u0131kurudere K\xF6y\xFC)",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Maz\u0131 Mahallesi (Yukar\u0131kurudere K\xF6y\xFC)",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Menderes Mahallesi",
      "postaKodu": "03600",
      "semt": "Emirda\u011F"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "\xD6renk\xF6y K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "\xD6zkan K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Palitl\u0131 Mahallesi (Yukar\u0131kurudere K\xF6y\xFC)",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Rahimli Mahallesi (Tezk\xF6y K\xF6y\xFC)",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Salihler K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "S\u0131\u011Frac\u0131k K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Sofulu Mahallesi (Davulga Beldesi)",
      "postaKodu": "03630",
      "semt": "Davulga"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "So\u011Fukkuyu K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Suvermez K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Tabaklar K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Tepek\xF6y K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Tezk\xF6y Merkez Mahallesi (Tezk\xF6y K\xF6y\xFC)",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Toki Mahallesi (G\xF6m\xFC Beldesi)",
      "postaKodu": "03680",
      "semt": "G\xF6m\xFC"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Toklucak K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Top\xE7ular Mahallesi (Ba\u015Fkonak K\xF6y\xFC)",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Topdere K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "T\xFCrkmenak\xF6ren K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "T\xFCrkmenk\xF6y K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "\xDCmraniye K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Veysel K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Yar\u0131kkaya K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Yar\u0131mca K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Yavuz K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Yeni Kacerli Mahallesi",
      "postaKodu": "03600",
      "semt": "Emirda\u011F"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Yeni Mahallesi",
      "postaKodu": "03600",
      "semt": "Emirda\u011F"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Yeni Mahallesi (Adayaz\u0131 K\xF6y\xFC)",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Yeni Mahallesi (A\u015Fa\u011F\u0131piribeyli K\xF6y\xFC)",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Yenido\u011Fan Mahallesi",
      "postaKodu": "03600",
      "semt": "Emirda\u011F"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Yenido\u011Fan Mahallesi (Adayaz\u0131 K\xF6y\xFC)",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Yenikap\u0131 K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Yenik\xF6y K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Y\u0131ld\u0131z Mahallesi (Bademli K\xF6y\xFC)",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Y\xFCre\u011Fil K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Yusufa\u011Fa K\xF6y\xFC",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Emirda\u011F",
      "mahalle": "Zafer Mahallesi (Bademli K\xF6y\xFC)",
      "postaKodu": "03602",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Evciler",
      "mahalle": "Akyarma K\xF6y\xFC",
      "postaKodu": "03962",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Evciler",
      "mahalle": "Bademli Mahallesi (Alt\u0131nova K\xF6y\xFC)",
      "postaKodu": "03962",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Evciler",
      "mahalle": "Barbaros Mahallesi (G\xF6k\xE7ek K\xF6y\xFC)",
      "postaKodu": "03962",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Evciler",
      "mahalle": "Bostanc\u0131 K\xF6y\xFC",
      "postaKodu": "03962",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Evciler",
      "mahalle": "Camikebir Mahallesi",
      "postaKodu": "03960",
      "semt": "Evciler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Evciler",
      "mahalle": "\xC7ay\xF6n\xFC Mahallesi (Madenler K\xF6y\xFC)",
      "postaKodu": "03962",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Evciler",
      "mahalle": "Deprem Evleri Mahallesi (Madenler K\xF6y\xFC)",
      "postaKodu": "03962",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Evciler",
      "mahalle": "Dere Mahallesi (Alt\u0131nova K\xF6y\xFC)",
      "postaKodu": "03962",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Evciler",
      "mahalle": "Fatih Mahallesi",
      "postaKodu": "03960",
      "semt": "Evciler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Evciler",
      "mahalle": "Fatih Mahallesi (G\xF6k\xE7ek K\xF6y\xFC)",
      "postaKodu": "03962",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Evciler",
      "mahalle": "G\xFCndo\u011Fdu Deprem Evleri Mahallesi (G\xF6k\xE7ek K\xF6y\xFC)",
      "postaKodu": "03962",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Evciler",
      "mahalle": "Kayal\u0131k Mahallesi",
      "postaKodu": "03960",
      "semt": "Evciler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Evciler",
      "mahalle": "K\xF6rkuyu K\xF6y\xFC",
      "postaKodu": "03962",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Evciler",
      "mahalle": "K\xFCme Evleri Mahallesi (Alt\u0131nova K\xF6y\xFC)",
      "postaKodu": "03962",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Evciler",
      "mahalle": "Mehmet Akif Mahallesi",
      "postaKodu": "03960",
      "semt": "Evciler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Evciler",
      "mahalle": "Mevlana Mahallesi (Barakl\u0131 K\xF6y\xFC)",
      "postaKodu": "03962",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Evciler",
      "mahalle": "Yavuz Selim Mahallesi",
      "postaKodu": "03960",
      "semt": "Evciler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Evciler",
      "mahalle": "Yunus Emre Mahallesi",
      "postaKodu": "03960",
      "semt": "Evciler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Evciler",
      "mahalle": "Yunus Emre Mahallesi (Barakl\u0131 K\xF6y\xFC)",
      "postaKodu": "03962",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Hocalar",
      "mahalle": "Ak\xE7adere K\xF6y\xFC",
      "postaKodu": "03532",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Hocalar",
      "mahalle": "A\u015Fa\u011F\u0131 Mahallesi (G\xFCre K\xF6y\xFC)",
      "postaKodu": "03532",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Hocalar",
      "mahalle": "A\u015Fa\u011F\u0131 Mahallesi (Kozluca K\xF6y\xFC)",
      "postaKodu": "03532",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Hocalar",
      "mahalle": "Avganc\u0131k K\xF6y\xFC",
      "postaKodu": "03532",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Hocalar",
      "mahalle": "\xC7alca K\xF6y\xFC",
      "postaKodu": "03532",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Hocalar",
      "mahalle": "\xC7epni K\xF6y\xFC",
      "postaKodu": "03532",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Hocalar",
      "mahalle": "Cumhuriyet Mahallesi (Ye\u015Filhisar K\xF6y\xFC)",
      "postaKodu": "03532",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Hocalar",
      "mahalle": "Davulga K\xF6y\xFC",
      "postaKodu": "03532",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Hocalar",
      "mahalle": "Devlethan K\xF6y\xFC",
      "postaKodu": "03532",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Hocalar",
      "mahalle": "Devrant Mahallesi (G\xFCre K\xF6y\xFC)",
      "postaKodu": "03532",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Hocalar",
      "mahalle": "Eldizan Mahallesi (\xC7epni K\xF6y\xFC)",
      "postaKodu": "03532",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Hocalar",
      "mahalle": "Fatih Mahallesi (Ye\u015Filhisar K\xF6y\xFC)",
      "postaKodu": "03532",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Hocalar",
      "mahalle": "G\xFCre K\xF6y\xFC",
      "postaKodu": "03532",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Hocalar",
      "mahalle": "Hisar Mahallesi (Ye\u015Filhisar K\xF6y\xFC)",
      "postaKodu": "03532",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Hocalar",
      "mahalle": "H\xFCrriyet Mahallesi",
      "postaKodu": "03530",
      "semt": "Hocalar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Hocalar",
      "mahalle": "\u0130hsaniye K\xF6y\xFC",
      "postaKodu": "03532",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Hocalar",
      "mahalle": "Kocag\xF6l K\xF6y\xFC",
      "postaKodu": "03532",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Hocalar",
      "mahalle": "Kozluca K\xF6y\xFC",
      "postaKodu": "03532",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Hocalar",
      "mahalle": "\xD6rencik K\xF6y\xFC",
      "postaKodu": "03532",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Hocalar",
      "mahalle": "\xD6rt\xFCl\xFC K\xF6y\xFC",
      "postaKodu": "03532",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Hocalar",
      "mahalle": "\u015Eafak Mahallesi",
      "postaKodu": "03530",
      "semt": "Hocalar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Hocalar",
      "mahalle": "Uluk\xF6y K\xF6y\xFC",
      "postaKodu": "03532",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Hocalar",
      "mahalle": "Ya\u011Fc\u0131 K\xF6y\xFC",
      "postaKodu": "03532",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Hocalar",
      "mahalle": "Yeni Mahallesi",
      "postaKodu": "03530",
      "semt": "Hocalar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Hocalar",
      "mahalle": "Yeni Mahallesi (Ye\u015Filhisar K\xF6y\xFC)",
      "postaKodu": "03532",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Hocalar",
      "mahalle": "Yukar\u0131 Mahallesi (Ak\xE7adere K\xF6y\xFC)",
      "postaKodu": "03532",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "Ablak K\xF6y\xFC",
      "postaKodu": "03372",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "Ak\xF6ren Mahallesi",
      "postaKodu": "03370",
      "semt": "\u0130hsaniye"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "A\u015Fa\u011F\u0131tand\u0131r K\xF6y\xFC",
      "postaKodu": "03372",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "Atat\xFCrk Mahallesi (Yaylaba\u011F\u0131 Beldesi)",
      "postaKodu": "03375",
      "semt": "Yaylaba\u011F\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "Bah\xE7elievler Mahallesi (Yaylaba\u011F\u0131 Beldesi)",
      "postaKodu": "03375",
      "semt": "Yaylaba\u011F\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "Bas\u0131rlar K\xF6y\xFC",
      "postaKodu": "03372",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "Bayramaliler K\xF6y\xFC",
      "postaKodu": "03372",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "Belce Mahallesi (Gazl\u0131g\xF6l Beldesi)",
      "postaKodu": "03383",
      "semt": "Gazl\u0131g\xF6l"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "Beyk\xF6y K\xF6y\xFC",
      "postaKodu": "03372",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "Cumal\u0131 K\xF6y\xFC",
      "postaKodu": "03372",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "Cumhuriyet Mahallesi",
      "postaKodu": "03370",
      "semt": "\u0130hsaniye"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "Cumhuriyet Mahallesi (Ayazini K\xF6y\xFC)",
      "postaKodu": "03372",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "Cumhuriyet Mahallesi (Bozh\xFCy\xFCk K\xF6y\xFC)",
      "postaKodu": "03372",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "Cumhuriyet Mahallesi (Gazl\u0131g\xF6l Beldesi)",
      "postaKodu": "03383",
      "semt": "Gazl\u0131g\xF6l"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "Cumhuriyet Mahallesi (Karacaahmet K\xF6y\xFC)",
      "postaKodu": "03372",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "Cumhuriyet Mahallesi (Kay\u0131han Beldesi)",
      "postaKodu": "03384",
      "semt": "Kay\u0131han"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "Demirli K\xF6y\xFC",
      "postaKodu": "03372",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "Derek\xF6y Mahallesi (Eynehankuzviran K\xF6y\xFC)",
      "postaKodu": "03372",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "Esentepe Mahallesi (Yaylaba\u011F\u0131 Beldesi)",
      "postaKodu": "03375",
      "semt": "Yaylaba\u011F\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "Eskieymir Mahallesi (Eskieymir K\xF6y\xFC)",
      "postaKodu": "03372",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "Fatih Mahallesi",
      "postaKodu": "03372",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "Fatih Mahallesi (Ayazini K\xF6y\xFC)",
      "postaKodu": "03372",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "Fatih Mahallesi (D\xF6\u011Fer Beldesi)",
      "postaKodu": "03380",
      "semt": "D\xF6\u011Fer"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "Fatih Mahallesi (Gazl\u0131g\xF6l Beldesi)",
      "postaKodu": "03383",
      "semt": "Gazl\u0131g\xF6l"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "Hac\u0131beyli K\xF6y\xFC",
      "postaKodu": "03372",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "H\xFCrriyet Mahallesi",
      "postaKodu": "03370",
      "semt": "\u0130hsaniye"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "\u0130\u011Fdemir K\xF6y\xFC",
      "postaKodu": "03372",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "Kad\u0131m\xFCrsel K\xF6y\xFC",
      "postaKodu": "03372",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "Kervansaray Mahallesi (D\xF6\u011Fer Beldesi)",
      "postaKodu": "03380",
      "semt": "D\xF6\u011Fer"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "Kildirler Mahallesi (Eynehankuzviran K\xF6y\xFC)",
      "postaKodu": "03372",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "K\u0131y\u0131r K\xF6y\xFC",
      "postaKodu": "03372",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "Kunduzlu Mahallesi (Kay\u0131han Beldesi)",
      "postaKodu": "03384",
      "semt": "Kay\u0131han"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "Kuzviran Mahallesi (Eynehankuzviran K\xF6y\xFC)",
      "postaKodu": "03372",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "Muratlar K\xF6y\xFC",
      "postaKodu": "03372",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "O\u011Fulbeyli K\xF6y\xFC",
      "postaKodu": "03372",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "\xD6ks\xFCzler Mahallesi (Eynehankuzviran K\xF6y\xFC)",
      "postaKodu": "03372",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "Orhanl\u0131 K\xF6y\xFC",
      "postaKodu": "03372",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "Osmank\xF6y K\xF6y\xFC",
      "postaKodu": "03372",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "P\u0131nar Mahallesi (Kay\u0131han Beldesi)",
      "postaKodu": "03384",
      "semt": "Kay\u0131han"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "\u015Eahinler Mahallesi",
      "postaKodu": "03370",
      "semt": "\u0130hsaniye"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "Sar\u0131caova K\xF6y\xFC",
      "postaKodu": "03372",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "\u015Eehitler Mahallesi (Bozh\xFCy\xFCk K\xF6y\xFC)",
      "postaKodu": "03372",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "Susuz Osmaniye Mahallesi",
      "postaKodu": "03372",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "Ta\u015Fp\u0131nar Mahallesi (Eskieymir K\xF6y\xFC)",
      "postaKodu": "03372",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "T\xFCrbe Mahallesi (Karacaahmet K\xF6y\xFC)",
      "postaKodu": "03372",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "T\xFCrbe Mahallesi (Kay\u0131han Beldesi)",
      "postaKodu": "03384",
      "semt": "Kay\u0131han"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "\xDC\xE7lerkayas\u0131 K\xF6y\xFC",
      "postaKodu": "03372",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "Yeni Mahallesi (D\xF6\u011Fer Beldesi)",
      "postaKodu": "03380",
      "semt": "D\xF6\u011Fer"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "Yenice K\xF6y\xFC",
      "postaKodu": "03372",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "Yenikent Mahallesi",
      "postaKodu": "03372",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "Ye\u015Filyayla K\xF6y\xFC",
      "postaKodu": "03372",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "Yi\u011Fitp\u0131nar\u0131 K\xF6y\xFC",
      "postaKodu": "03372",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "Yukar\u0131tand\u0131r K\xF6y\xFC",
      "postaKodu": "03372",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "Yunus Emre Mahallesi (Bozh\xFCy\xFCk K\xF6y\xFC)",
      "postaKodu": "03372",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "Yunus Emre Mahallesi (D\xF6\u011Fer Beldesi)",
      "postaKodu": "03380",
      "semt": "D\xF6\u011Fer"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "Yunus Emre Mahallesi (Gazl\u0131g\xF6l Beldesi)",
      "postaKodu": "03383",
      "semt": "Gazl\u0131g\xF6l"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130hsaniye",
      "mahalle": "Zafer Mahallesi",
      "postaKodu": "03370",
      "semt": "\u0130hsaniye"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130scehisar",
      "mahalle": "A\u011Fz\u0131kara Mahallesi (\xC7ata\u011F\u0131l K\xF6y\xFC)",
      "postaKodu": "03752",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130scehisar",
      "mahalle": "Atat\xFCrk Mahallesi (Alanyurt K\xF6y\xFC)",
      "postaKodu": "03752",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130scehisar",
      "mahalle": "Bah\xE7ecik K\xF6y\xFC",
      "postaKodu": "03752",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130scehisar",
      "mahalle": "\xC7akmak Mahallesi (Alanyurt K\xF6y\xFC)",
      "postaKodu": "03752",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130scehisar",
      "mahalle": "\xC7al\u0131\u015Flar K\xF6y\xFC",
      "postaKodu": "03752",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130scehisar",
      "mahalle": "Cevizli K\xF6y\xFC",
      "postaKodu": "03752",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130scehisar",
      "mahalle": "\xC7ukur Mahallesi",
      "postaKodu": "03750",
      "semt": "\u0130scehisar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130scehisar",
      "mahalle": "Cumhuriyet Mahallesi",
      "postaKodu": "03752",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130scehisar",
      "mahalle": "Cumhuriyet Mahallesi (Alanyurt K\xF6y\xFC)",
      "postaKodu": "03752",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130scehisar",
      "mahalle": "Cumhuriyet Mahallesi (Seydiler Beldesi)",
      "postaKodu": "03754",
      "semt": "Seydiler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130scehisar",
      "mahalle": "Do\u011Fanlar K\xF6y\xFC",
      "postaKodu": "03752",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130scehisar",
      "mahalle": "Do\u011Flat K\xF6y\xFC",
      "postaKodu": "03752",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130scehisar",
      "mahalle": "Duraklar Mahallesi (\xC7ata\u011F\u0131l K\xF6y\xFC)",
      "postaKodu": "03752",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130scehisar",
      "mahalle": "Esentepe Mahallesi",
      "postaKodu": "03750",
      "semt": "\u0130scehisar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130scehisar",
      "mahalle": "Eski Hamam Mahallesi",
      "postaKodu": "03750",
      "semt": "\u0130scehisar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130scehisar",
      "mahalle": "Fatih Mahallesi",
      "postaKodu": "03750",
      "semt": "\u0130scehisar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130scehisar",
      "mahalle": "Hasan Basri Mahallesi (Seydiler Beldesi)",
      "postaKodu": "03754",
      "semt": "Seydiler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130scehisar",
      "mahalle": "H\xFCrriyet Mahallesi (Alanyurt K\xF6y\xFC)",
      "postaKodu": "03752",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130scehisar",
      "mahalle": "Karaa\u011Fa\xE7 K\xF6y\xFC",
      "postaKodu": "03752",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130scehisar",
      "mahalle": "Karakaya Mahallesi (Konar\u0131 K\xF6y\xFC)",
      "postaKodu": "03752",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130scehisar",
      "mahalle": "Kavak Mahallesi",
      "postaKodu": "03750",
      "semt": "\u0130scehisar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130scehisar",
      "mahalle": "Kavruklar Mahallesi (Karakaya K\xF6y\xFC)",
      "postaKodu": "03752",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130scehisar",
      "mahalle": "Keserler Mahallesi (Karakaya K\xF6y\xFC)",
      "postaKodu": "03752",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130scehisar",
      "mahalle": "Kurtulu\u015F Mahallesi",
      "postaKodu": "03752",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130scehisar",
      "mahalle": "K\xFCrtyurdu Mahallesi (\xC7ata\u011F\u0131l K\xF6y\xFC)",
      "postaKodu": "03752",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130scehisar",
      "mahalle": "Medrese Mahallesi",
      "postaKodu": "03750",
      "semt": "\u0130scehisar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130scehisar",
      "mahalle": "Merkez Mahallesi (\xC7ata\u011F\u0131l K\xF6y\xFC)",
      "postaKodu": "03752",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130scehisar",
      "mahalle": "Merkez Mahallesi (Karakaya K\xF6y\xFC)",
      "postaKodu": "03752",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130scehisar",
      "mahalle": "Merkez Mahallesi (Konar\u0131 K\xF6y\xFC)",
      "postaKodu": "03752",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130scehisar",
      "mahalle": "Merkez Mahallesi (Olukp\u0131nar K\xF6y\xFC)",
      "postaKodu": "03752",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130scehisar",
      "mahalle": "Mermer Osb Mahallesi",
      "postaKodu": "03750",
      "semt": "\u0130scehisar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130scehisar",
      "mahalle": "\xD6ld\xFCmler Mahallesi (Olukp\u0131nar K\xF6y\xFC)",
      "postaKodu": "03752",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130scehisar",
      "mahalle": "Sel\xE7uklu Mahallesi",
      "postaKodu": "03750",
      "semt": "\u0130scehisar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130scehisar",
      "mahalle": "Selimiye Mahallesi (Alanyurt K\xF6y\xFC)",
      "postaKodu": "03752",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130scehisar",
      "mahalle": "\u015Eirinevler Mahallesi",
      "postaKodu": "03750",
      "semt": "\u0130scehisar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130scehisar",
      "mahalle": "Tepecik Mahallesi",
      "postaKodu": "03750",
      "semt": "\u0130scehisar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130scehisar",
      "mahalle": "Veliler Mahallesi (Karakaya K\xF6y\xFC)",
      "postaKodu": "03752",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130scehisar",
      "mahalle": "Yan\u0131klar Mahallesi (Olukp\u0131nar K\xF6y\xFC)",
      "postaKodu": "03752",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u0130scehisar",
      "mahalle": "Zeybek Mahallesi",
      "postaKodu": "03750",
      "semt": "\u0130scehisar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "K\u0131z\u0131l\xF6ren",
      "mahalle": "Cumhuriyet Mahallesi",
      "postaKodu": "03560",
      "semt": "K\u0131z\u0131l\xF6ren"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "K\u0131z\u0131l\xF6ren",
      "mahalle": "Ekinova K\xF6y\xFC",
      "postaKodu": "03562",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "K\u0131z\u0131l\xF6ren",
      "mahalle": "G\xFClyaz\u0131 K\xF6y\xFC",
      "postaKodu": "03562",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "K\u0131z\u0131l\xF6ren",
      "mahalle": "T\xFCrkbelkavak K\xF6y\xFC",
      "postaKodu": "03562",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "K\u0131z\u0131l\xF6ren",
      "mahalle": "Yeni Mahallesi",
      "postaKodu": "03560",
      "semt": "K\u0131z\u0131l\xF6ren"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "K\u0131z\u0131l\xF6ren",
      "mahalle": "Yenibelkavak K\xF6y\xFC",
      "postaKodu": "03562",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Afyonkarahisar Osb Mahallesi",
      "postaKodu": "03030",
      "semt": "Uydukent"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Ak\xE7in Mahallesi",
      "postaKodu": "03040",
      "semt": "Fatih"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Akmescit Mahallesi",
      "postaKodu": "03100",
      "semt": "Kale"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Alcal\u0131 K\xF6y\xFC",
      "postaKodu": "03032",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Ali \xC7etinkaya Mahallesi",
      "postaKodu": "03030",
      "semt": "Uydukent"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Ali \xC7etinkaya Mahallesi (\xC7ay\u0131rba\u011F Beldesi)",
      "postaKodu": "03210",
      "semt": "\xC7ay\u0131rba\u011F"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Ali \u0130hsan Pa\u015Fa Mahallesi",
      "postaKodu": "03040",
      "semt": "Fatih"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Ali \u0130hsan Pa\u015Fa Mahallesi (Nuribey Beldesi)",
      "postaKodu": "03215",
      "semt": "Nuribey"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Alt\u0131nda\u011F Mahallesi (S\xFCl\xFCmenli Beldesi)",
      "postaKodu": "03140",
      "semt": "S\xFCl\xFCmenli"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Atak\xF6y Mahallesi",
      "postaKodu": "03050",
      "semt": "Adliye"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Atat\xFCrk Mahallesi (Beyyaz\u0131 Beldesi)",
      "postaKodu": "03217",
      "semt": "Beyyaz\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Atat\xFCrk Mahallesi (I\u015F\u0131klar Beldesi)",
      "postaKodu": "03080",
      "semt": "I\u015F\u0131klar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Barbaros Mahallesi (Salar Beldesi)",
      "postaKodu": "03150",
      "semt": "Salar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Battalgazi Mahallesi",
      "postaKodu": "03030",
      "semt": "Uydukent"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Bayatc\u0131k Mahallesi",
      "postaKodu": "03032",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Bayramgazi K\xF6y\xFC",
      "postaKodu": "03032",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Belkaraca\xF6ren K\xF6y\xFC",
      "postaKodu": "03032",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Beyaz\u0131t Mahallesi",
      "postaKodu": "03040",
      "semt": "Fatih"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Bostanl\u0131 K\xF6y\xFC",
      "postaKodu": "03032",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Burhaniye K\xF6y\xFC",
      "postaKodu": "03032",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Burmal\u0131 Mahallesi",
      "postaKodu": "03100",
      "semt": "Kale"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "\xC7ak\u0131r Mahallesi",
      "postaKodu": "03032",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "\xC7atal\xE7e\u015Fme Mahallesi (Bayramgazi K\xF6y\xFC)",
      "postaKodu": "03032",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "\xC7avdarl\u0131 K\xF6y\xFC",
      "postaKodu": "03032",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Cumhuriyet Mahallesi",
      "postaKodu": "03200",
      "semt": "\xC7ar\u015F\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Cumhuriyet Mahallesi (An\u0131tkaya K\xF6y\xFC)",
      "postaKodu": "03032",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Cumhuriyet Mahallesi (Beyyaz\u0131 Beldesi)",
      "postaKodu": "03217",
      "semt": "Beyyaz\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Cumhuriyet Mahallesi (Erkmen Beldesi)",
      "postaKodu": "03211",
      "semt": "Erkmen"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Cumhuriyet Mahallesi (I\u015F\u0131klar Beldesi)",
      "postaKodu": "03080",
      "semt": "I\u015F\u0131klar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Cumhuriyet Mahallesi (S\xFCl\xFCmenli Beldesi)",
      "postaKodu": "03140",
      "semt": "S\xFCl\xFCmenli"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Dairecep Mahallesi",
      "postaKodu": "03200",
      "semt": "\xC7ar\u015F\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "De\u011Firmendere K\xF6y\xFC",
      "postaKodu": "03032",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Demir\xE7evre Mahallesi",
      "postaKodu": "03032",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Dervi\u015F Pa\u015Fa Mahallesi",
      "postaKodu": "03200",
      "semt": "\xC7ar\u015F\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Devren Mahallesi (Saadet K\xF6y\xFC)",
      "postaKodu": "03032",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "D\xF6rtyol Mahallesi",
      "postaKodu": "03030",
      "semt": "Uydukent"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Dumlup\u0131nar Mahallesi",
      "postaKodu": "03200",
      "semt": "\xC7ar\u015F\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Erenler Mahallesi",
      "postaKodu": "03030",
      "semt": "Uydukent"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Erenler Mahallesi (\xC7\u0131kr\u0131k Beldesi)",
      "postaKodu": "03204",
      "semt": "\xC7\u0131kr\u0131k"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Ertu\u011Frul Gazi Mahallesi",
      "postaKodu": "03030",
      "semt": "Uydukent"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Esentepe Mahallesi",
      "postaKodu": "03050",
      "semt": "Adliye"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "E\u015Frefpa\u015Fa Mahallesi",
      "postaKodu": "03040",
      "semt": "Fatih"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Fak\u0131pa\u015Fa Mahallesi",
      "postaKodu": "03100",
      "semt": "Kale"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Fatih Mahallesi",
      "postaKodu": "03040",
      "semt": "Fatih"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Fatih Mahallesi (\xC7ay\u0131rba\u011F Beldesi)",
      "postaKodu": "03210",
      "semt": "\xC7ay\u0131rba\u011F"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Fatih Mahallesi (Fethibey Beldesi)",
      "postaKodu": "03212",
      "semt": "Fethibey"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Fatih Mahallesi (Gebeceler Beldesi)",
      "postaKodu": "03213",
      "semt": "Gebeceler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Fatih Mahallesi (Nuribey Beldesi)",
      "postaKodu": "03215",
      "semt": "Nuribey"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Fatih Mahallesi (Salar Beldesi)",
      "postaKodu": "03150",
      "semt": "Salar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Fevzi \xC7akmak Mahallesi (Erkmen Beldesi)",
      "postaKodu": "03211",
      "semt": "Erkmen"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Gazi Mahallesi",
      "postaKodu": "03040",
      "semt": "Fatih"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "G\xF6khan Mahallesi (Susuz Beldesi)",
      "postaKodu": "03218",
      "semt": "Susuz"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "G\xF6zs\xFCzl\xFC K\xF6y\xFC",
      "postaKodu": "03032",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "G\xFCltepe Mahallesi (S\xFCl\xFCn Beldesi)",
      "postaKodu": "03214",
      "semt": "S\xFCl\xFCn"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "G\xFCm\xFC\u015F Tepe Mahallesi (Salar Beldesi)",
      "postaKodu": "03150",
      "semt": "Salar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "G\xFCvenevler Mahallesi",
      "postaKodu": "03040",
      "semt": "Fatih"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Halil \u0130brahim Sultan Mahallesi (Salar Beldesi)",
      "postaKodu": "03150",
      "semt": "Salar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Halimoru K\xF6y\xFC",
      "postaKodu": "03032",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Hamidiye Mahallesi",
      "postaKodu": "03100",
      "semt": "Kale"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Hasan Karaa\u011Fa\xE7 Mahallesi",
      "postaKodu": "03100",
      "semt": "Kale"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Hattat Karahisar Mahallesi",
      "postaKodu": "03200",
      "semt": "\xC7ar\u015F\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Hisar Mahallesi (S\xFCl\xFCn Beldesi)",
      "postaKodu": "03214",
      "semt": "S\xFCl\xFCn"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Hoca Ahmet Yesevi Mahallesi",
      "postaKodu": "03040",
      "semt": "Fatih"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "H\xFCrriyet Mahallesi (Erkmen Beldesi)",
      "postaKodu": "03211",
      "semt": "Erkmen"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "H\xFCrriyet Mahallesi (I\u015F\u0131klar Beldesi)",
      "postaKodu": "03080",
      "semt": "I\u015F\u0131klar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Huzur Mahallesi (\xC7ay\u0131rba\u011F Beldesi)",
      "postaKodu": "03210",
      "semt": "\xC7ay\u0131rba\u011F"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "\u0130smail Mahallesi",
      "postaKodu": "03032",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "\u0130stiklal Mahallesi",
      "postaKodu": "03050",
      "semt": "Adliye"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "\u0130stiklal Mahallesi (Gebeceler Beldesi)",
      "postaKodu": "03213",
      "semt": "Gebeceler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "\u0130stiklal Mahallesi (I\u015F\u0131klar Beldesi)",
      "postaKodu": "03080",
      "semt": "I\u015F\u0131klar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "\u0130stiklal Mahallesi (S\xFCl\xFCmenli Beldesi)",
      "postaKodu": "03140",
      "semt": "S\xFCl\xFCmenli"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Kanl\u0131ca Mahallesi",
      "postaKodu": "03050",
      "semt": "Adliye"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Kaplanl\u0131 K\xF6y\xFC",
      "postaKodu": "03032",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Karaarslan \xC7ay\u0131r\u0131 Mahallesi (Karaarslan K\xF6y\xFC)",
      "postaKodu": "03032",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Karaarslan K\xF6y\xFC",
      "postaKodu": "03032",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Karaman Mahallesi",
      "postaKodu": "03200",
      "semt": "\xC7ar\u015F\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Kar\u015F\u0131yaka Mahallesi",
      "postaKodu": "03030",
      "semt": "Uydukent"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Kas\u0131mpa\u015Fa Mahallesi",
      "postaKodu": "03200",
      "semt": "\xC7ar\u015F\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Kayadibi Mahallesi",
      "postaKodu": "03200",
      "semt": "\xC7ar\u015F\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "K\u0131\u015Flac\u0131k Mahallesi",
      "postaKodu": "03032",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "K\u0131z\u0131lda\u011F K\xF6y\xFC",
      "postaKodu": "03032",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Ko\xE7aktepesi Mahallesi (\xC7avdarl\u0131 K\xF6y\xFC)",
      "postaKodu": "03032",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Kocatepe Mahallesi",
      "postaKodu": "03040",
      "semt": "Fatih"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Kocatepe Mahallesi (Gebeceler Beldesi)",
      "postaKodu": "03213",
      "semt": "Gebeceler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Kocatepe Mahallesi (Kocatepe Beldesi)",
      "postaKodu": "03105",
      "semt": "Kocatepe"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "K\xF6pr\xFCl\xFC K\xF6y\xFC",
      "postaKodu": "03032",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Kozluca K\xF6y\xFC",
      "postaKodu": "03032",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "K\xFC\xE7\xFCk\xE7obanl\u0131 K\xF6y\xFC",
      "postaKodu": "03032",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "K\xFC\xE7\xFCkkalecik K\xF6y\xFC",
      "postaKodu": "03032",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Kurtulu\u015F Mahallesi (De\u011Firmenayval\u0131 Beldesi)",
      "postaKodu": "03103",
      "semt": "De\u011Firmenayval\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Kurtulu\u015F Mahallesi (Kocatepe Beldesi)",
      "postaKodu": "03105",
      "semt": "Kocatepe"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Mare\u015Fal Fevzi \xC7akmak Mahallesi",
      "postaKodu": "03050",
      "semt": "Adliye"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Mare\u015Fal Fevzi \xC7akmak Mahallesi (Nuribey Beldesi)",
      "postaKodu": "03215",
      "semt": "Nuribey"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Marulcu Mahallesi",
      "postaKodu": "03200",
      "semt": "\xC7ar\u015F\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Mecidiye Mahallesi",
      "postaKodu": "03200",
      "semt": "\xC7ar\u015F\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Mehmet Akif Mahallesi (Nuribey Beldesi)",
      "postaKodu": "03215",
      "semt": "Nuribey"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Nazmi Saat\xE7i Mahallesi",
      "postaKodu": "03040",
      "semt": "Fatih"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Olucak K\xF6y\xFC",
      "postaKodu": "03032",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Olucak Mahallesi",
      "postaKodu": "03100",
      "semt": "Kale"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Omuzca K\xF6y\xFC",
      "postaKodu": "03032",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Orhangazi Mahallesi",
      "postaKodu": "03030",
      "semt": "Uydukent"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "\xD6rnek Mahallesi (Beyyaz\u0131 Beldesi)",
      "postaKodu": "03217",
      "semt": "Beyyaz\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "\xD6rnekevler Mahallesi",
      "postaKodu": "03040",
      "semt": "Fatih"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Osman Gazi Mahallesi",
      "postaKodu": "03030",
      "semt": "Uydukent"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Osmanl\u0131 Mahallesi (Susuz Beldesi)",
      "postaKodu": "03218",
      "semt": "Susuz"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Saadet K\xF6y\xFC",
      "postaKodu": "03032",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Sad\u0131kbey Mahallesi",
      "postaKodu": "03032",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Sahipata Mahallesi",
      "postaKodu": "03040",
      "semt": "Fatih"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Sakarya Mahallesi (Susuz Beldesi)",
      "postaKodu": "03218",
      "semt": "Susuz"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Sarayd\xFCz\xFC \xC7ay\u0131r\u0131 Mahallesi (Sarayd\xFCz\xFC K\xF6y\xFC)",
      "postaKodu": "03032",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Sarayd\xFCz\xFC K\xF6y\xFC",
      "postaKodu": "03032",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Sar\u0131k K\xF6y\xFC",
      "postaKodu": "03032",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "\u015Eehit Ahmet Mahallesi (De\u011Firmenayval\u0131 Beldesi)",
      "postaKodu": "03103",
      "semt": "De\u011Firmenayval\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "\u015Eeker Mahallesi (S\xFCl\xFCmenli Beldesi)",
      "postaKodu": "03140",
      "semt": "S\xFCl\xFCmenli"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Sel\xE7uklu Mahallesi",
      "postaKodu": "03030",
      "semt": "Uydukent"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Sel\xE7uklu Mahallesi (Susuz Beldesi)",
      "postaKodu": "03218",
      "semt": "Susuz"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "\u015Euhut Osb Mahallesi (Belkaraca\xF6ren K\xF6y\xFC)",
      "postaKodu": "03032",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "S\xFCmer Mahallesi",
      "postaKodu": "03100",
      "semt": "Kale"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Tac\u0131 Ahmet Mahallesi",
      "postaKodu": "03100",
      "semt": "Kale"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Ta\u015Fp\u0131nar Mahallesi",
      "postaKodu": "03100",
      "semt": "Kale"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "U\u011Fur Mahallesi (\xC7ay\u0131rba\u011F Beldesi)",
      "postaKodu": "03210",
      "semt": "\xC7ay\u0131rba\u011F"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Ulucami Mahallesi (S\xFCl\xFCmenli Beldesi)",
      "postaKodu": "03140",
      "semt": "S\xFCl\xFCmenli"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Veysel Karani Mahallesi",
      "postaKodu": "03040",
      "semt": "Fatih"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Yaka Mahallesi (I\u015F\u0131klar Beldesi)",
      "postaKodu": "03080",
      "semt": "I\u015F\u0131klar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Yarenler Mahallesi",
      "postaKodu": "03100",
      "semt": "Kale"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Yar\u0131mca K\xF6y\xFC",
      "postaKodu": "03032",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Yavuz Selim Mahallesi (Fethibey Beldesi)",
      "postaKodu": "03212",
      "semt": "Fethibey"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Yavuz Selim Mahallesi (Salar Beldesi)",
      "postaKodu": "03150",
      "semt": "Salar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Yeni Mahallesi (Gebeceler Beldesi)",
      "postaKodu": "03213",
      "semt": "Gebeceler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Yeni Mahallesi (I\u015F\u0131klar Beldesi)",
      "postaKodu": "03080",
      "semt": "I\u015F\u0131klar"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Yenice Mahallesi",
      "postaKodu": "03030",
      "semt": "Uydukent"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Ye\u015Filyurt Mahallesi",
      "postaKodu": "03030",
      "semt": "Uydukent"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Yunus Emre Mahallesi",
      "postaKodu": "03100",
      "semt": "Kale"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Yunus Emre Mahallesi (Fethibey Beldesi)",
      "postaKodu": "03212",
      "semt": "Fethibey"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Yunuslar Mahallesi (\xC7\u0131kr\u0131k Beldesi)",
      "postaKodu": "03204",
      "semt": "\xC7\u0131kr\u0131k"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Zafer Mahallesi",
      "postaKodu": "03050",
      "semt": "Adliye"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Zafer Mahallesi (An\u0131tkaya K\xF6y\xFC)",
      "postaKodu": "03032",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Zafer Mahallesi (Gebeceler Beldesi)",
      "postaKodu": "03213",
      "semt": "Gebeceler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Merkez",
      "mahalle": "Zafer Mahallesi (S\xFCl\xFCmenli Beldesi)",
      "postaKodu": "03140",
      "semt": "S\xFCl\xFCmenli"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Ak\u0131n K\xF6y\xFC",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Alacami K\xF6y\xFC",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Alag\xF6z K\xF6y\xFC",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Alamescit K\xF6y\xFC",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Ar\u0131zlar K\xF6y\xFC",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Asmac\u0131k K\xF6y\xFC",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Bah\xE7eli Mahallesi (\xD6renkaya K\xF6y\xFC)",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Ba\u015Fkuyucak K\xF6y\xFC",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Ba\u015Ftepe K\xF6y\xFC",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Bekta\u015F K\xF6y\xFC",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "\xC7ak\u0131r Mahallesi",
      "postaKodu": "03500",
      "semt": "Sand\u0131kl\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "\xC7ambeyli K\xF6y\xFC",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "\xC7ay Mahallesi",
      "postaKodu": "03500",
      "semt": "Sand\u0131kl\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Celilo\u011Flu K\xF6y\xFC",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "\xC7evrep\u0131nar K\xF6y\xFC",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "\xC7i\u011Filtepe K\xF6y\xFC",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "\xC7i\u011Filtepe Mahallesi (Akhar\u0131m Beldesi)",
      "postaKodu": "03510",
      "semt": "Akhar\u0131m"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "\xC7omo\u011Flu K\xF6y\xFC",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "\xC7ukurca K\xF6y\xFC",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Cuma Mahallesi",
      "postaKodu": "03500",
      "semt": "Sand\u0131kl\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Cumhuriyet Mahallesi (Ball\u0131k K\xF6y\xFC)",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Cumhuriyet Mahallesi (Ba\u015Fa\u011Fa\xE7 K\xF6y\xFC)",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Cumhuriyet Mahallesi (Karadirek K\xF6y\xFC)",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Cumhuriyet Mahallesi (Kusura K\xF6y\xFC)",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Cumhuriyet Mahallesi (Yava\u015Flar K\xF6y\xFC)",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Dayl\u0131k K\xF6y\xFC",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Dikmen Mahallesi (Akhar\u0131m Beldesi)",
      "postaKodu": "03510",
      "semt": "Akhar\u0131m"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Dodurga K\xF6y\xFC",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Duta\u011Fac\u0131 K\xF6y\xFC",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Ece Mahallesi",
      "postaKodu": "03500",
      "semt": "Sand\u0131kl\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Ekinhisar K\xF6y\xFC",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Emek Mahallesi (Sorkun K\xF6y\xFC)",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Emirhisar K\xF6y\xFC",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Esentepe Mahallesi (Ball\u0131k K\xF6y\xFC)",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Fatih Mahallesi",
      "postaKodu": "03500",
      "semt": "Sand\u0131kl\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Fatih Mahallesi (Kusura K\xF6y\xFC)",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Fatih Mahallesi (Mente\u015F K\xF6y\xFC)",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "G\xF6k\xE7ealan K\xF6y\xFC",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "G\xFCney Mahallesi (K\u0131z\u0131k K\xF6y\xFC)",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "G\xFCrsu K\xF6y\xFC",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "H\u0131rka K\xF6y\xFC",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Hisar Mahallesi",
      "postaKodu": "03500",
      "semt": "Sand\u0131kl\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Hisar Mahallesi (Akhar\u0131m Beldesi)",
      "postaKodu": "03510",
      "semt": "Akhar\u0131m"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Hisar Mahallesi (Yava\u015Flar K\xF6y\xFC)",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "H\xFCrriyet Mahallesi (Karadirek K\xF6y\xFC)",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "H\xFCrriyet Mahallesi (Kusura K\xF6y\xFC)",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "H\xFCrriyet Mahallesi (Mente\u015F K\xF6y\xFC)",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "\u0130stasyon Mahallesi",
      "postaKodu": "03500",
      "semt": "Sand\u0131kl\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "\u0130stiklal Mahallesi (Ba\u015Fa\u011Fa\xE7 K\xF6y\xFC)",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "\u0130stiklal Mahallesi (Karadirek K\xF6y\xFC)",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Karaca\xF6ren K\xF6y\xFC",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Karasand\u0131kl\u0131 K\xF6y\xFC",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Karg\u0131n K\xF6y\xFC",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Kestel Mahallesi (Sorkun K\xF6y\xFC)",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Kevser Mahallesi",
      "postaKodu": "03500",
      "semt": "Sand\u0131kl\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "K\u0131n\u0131k K\xF6y\xFC",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "K\u0131z\u0131lca K\xF6y\xFC",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Ko\xE7gazi K\xF6y\xFC",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Ko\xE7hisar K\xF6y\xFC",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Kozvan K\xF6y\xFC",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Kurtulu\u015F Mahallesi (Yava\u015Flar K\xF6y\xFC)",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Kuzey Mahallesi (K\u0131z\u0131k K\xF6y\xFC)",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Nasuho\u011Flu K\xF6y\xFC",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Nur Mahallesi (\xD6renkaya K\xF6y\xFC)",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Oda K\xF6y\xFC",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "\xD6rmekuyu K\xF6y\xFC",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Orta Mahallesi (K\u0131z\u0131k K\xF6y\xFC)",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Otluk K\xF6y\xFC",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Re\u015Fadiye K\xF6y\xFC",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "\u015Eafak Mahallesi (Ba\u015Fa\u011Fa\xE7 K\xF6y\xFC)",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Salt\u0131k K\xF6y\xFC",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Sand\u0131kl\u0131 Osb Mahallesi",
      "postaKodu": "03500",
      "semt": "Sand\u0131kl\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Sazak Mahallesi",
      "postaKodu": "03500",
      "semt": "Sand\u0131kl\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Sel\xE7ik K\xF6y\xFC",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "\u015Eeyhyah\u015Fi K\xF6y\xFC",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "\u015Eirinevler Mahallesi",
      "postaKodu": "03500",
      "semt": "Sand\u0131kl\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "So\u011Fucak K\xF6y\xFC",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Susuz K\xF6y\xFC",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Tapduk Emre Mahallesi",
      "postaKodu": "03500",
      "semt": "Sand\u0131kl\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "\xDClfeciler K\xF6y\xFC",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "\xDCrk\xFCt K\xF6y\xFC",
      "map": '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3121.3714079668907!2d30.187378511828612!3d38.525205871688314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cf531288ecbfd5%3A0xb46ef1d5918821bc!2zw5xya8O8dCwgMDM1MDIgw5xya8O8dC9TYW5kxLFrbMSxL0FmeW9ua2FyYWhpc2Fy!5e0!3m2!1sen!2str!4v1773552723562!5m2!1sen!2str" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Yan\u0131k\xF6ren K\xF6y\xFC",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Yayman K\xF6y\xFC",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Yolkonak K\xF6y\xFC",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Y\xFCkseli\u015F Mahallesi (Sorkun K\xF6y\xFC)",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Yumruca K\xF6y\xFC",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Yunus Emre Mahallesi",
      "postaKodu": "03500",
      "semt": "Sand\u0131kl\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Zafer Mahallesi",
      "postaKodu": "03500",
      "semt": "Sand\u0131kl\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sand\u0131kl\u0131",
      "mahalle": "Zafer Mahallesi (Ball\u0131k K\xF6y\xFC)",
      "postaKodu": "03502",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Ak\xE7a\u015Far K\xF6y\xFC",
      "postaKodu": "03852",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Akde\u011Firmen K\xF6y\xFC",
      "postaKodu": "03852",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Akp\u0131nar Mahallesi",
      "postaKodu": "03850",
      "semt": "Sinanpa\u015Fa"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Ali \xC7etinkaya Mahallesi",
      "postaKodu": "03850",
      "semt": "Sinanpa\u015Fa"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Ambar Mahallesi (T\u0131naztepe Beldesi)",
      "postaKodu": "03110",
      "semt": "T\u0131naztepe"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "A\u015Fa\u011F\u0131 Mahallesi (G\xFCney Beldesi)",
      "postaKodu": "03880",
      "semt": "G\xFCney"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Atat\xFCrk Mahallesi (K\u0131l\u0131\xE7arslan Beldesi)",
      "postaKodu": "03858",
      "semt": "K\u0131l\u0131\xE7arslan"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Atat\xFCrk Mahallesi (K\u0131rka Beldesi)",
      "postaKodu": "03859",
      "semt": "K\u0131rka"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Atat\xFCrk Mahallesi (K\xFC\xE7\xFCkh\xFCy\xFCk Beldesi)",
      "postaKodu": "03854",
      "semt": "K\xFC\xE7\xFCkh\xFCy\xFCk"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Atat\xFCrk Mahallesi (Toku\u015Flar K\xF6y\xFC)",
      "postaKodu": "03852",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Ayvali K\xF6y\xFC",
      "postaKodu": "03852",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Ba\u011Fdat Mahallesi (Ak\xF6ren Beldesi)",
      "postaKodu": "03857",
      "semt": "Ak\xF6ren"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Bah\xE7elievler Mahallesi",
      "postaKodu": "03850",
      "semt": "Sinanpa\u015Fa"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Bah\xE7elievler Mahallesi (Nuh K\xF6y\xFC)",
      "postaKodu": "03852",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Bah\xE7elievler Mahallesi (Ta\u015Foluk Beldesi)",
      "postaKodu": "03121",
      "semt": "Ta\u015Foluk"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Bah\xE7elievler Mahallesi (T\u0131naztepe Beldesi)",
      "postaKodu": "03110",
      "semt": "T\u0131naztepe"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Balmahmut K\xF6y\xFC",
      "postaKodu": "03852",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Baltepe Mahallesi (K\u0131n\u0131k K\xF6y\xFC)",
      "postaKodu": "03852",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Ba\u015Fkimse K\xF6y\xFC",
      "postaKodu": "03852",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Bayrak Mahallesi (K\u0131n\u0131k K\xF6y\xFC)",
      "postaKodu": "03852",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Boyali K\xF6y\xFC",
      "postaKodu": "03852",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Bulca K\xF6y\xFC",
      "postaKodu": "03852",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "\xC7al\u0131\u015Flar Mahallesi (G\xFCney Beldesi)",
      "postaKodu": "03880",
      "semt": "G\xFCney"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Cami Mahallesi (K\u0131n\u0131k K\xF6y\xFC)",
      "postaKodu": "03852",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "\xC7amtepe Mahallesi (K\u0131n\u0131k K\xF6y\xFC)",
      "postaKodu": "03852",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "\xC7ankaya Mahallesi (Ta\u015Foluk Beldesi)",
      "postaKodu": "03121",
      "semt": "Ta\u015Foluk"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "\xC7atkuyu K\xF6y\xFC",
      "postaKodu": "03852",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "\xC7ayhisar K\xF6y\xFC",
      "postaKodu": "03852",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "\xC7ay\u0131r Mahallesi (K\u0131n\u0131k K\xF6y\xFC)",
      "postaKodu": "03852",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "\xC7i\u011Filtepe Mahallesi",
      "postaKodu": "03850",
      "semt": "Sinanpa\u015Fa"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "\xC7i\u011Filtepe Mahallesi (Ahmetpa\u015Fa Beldesi)",
      "postaKodu": "03860",
      "semt": "Ahmetpa\u015Fa"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "\xC7\u0131narl\u0131 Mahallesi (Ta\u015Foluk Beldesi)",
      "postaKodu": "03121",
      "semt": "Ta\u015Foluk"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "\xC7oban\xF6z\xFC K\xF6y\xFC",
      "postaKodu": "03852",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Cumhuriyet Mahallesi",
      "postaKodu": "03850",
      "semt": "Sinanpa\u015Fa"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Cumhuriyet Mahallesi (D\xFCza\u011Fa\xE7 Beldesi)",
      "postaKodu": "03870",
      "semt": "D\xFCza\u011Fa\xE7"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Cumhuriyet Mahallesi (K\u0131l\u0131\xE7arslan Beldesi)",
      "postaKodu": "03858",
      "semt": "K\u0131l\u0131\xE7arslan"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Cumhuriyet Mahallesi (K\xFC\xE7\xFCkh\xFCy\xFCk Beldesi)",
      "postaKodu": "03854",
      "semt": "K\xFC\xE7\xFCkh\xFCy\xFCk"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Cumhuriyet Mahallesi (Nuh K\xF6y\xFC)",
      "postaKodu": "03852",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Cumhuriyet Mahallesi (Serban Beldesi)",
      "postaKodu": "03855",
      "semt": "Serban"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Cumhuriyet Mahallesi (Ta\u015Foluk Beldesi)",
      "postaKodu": "03121",
      "semt": "Ta\u015Foluk"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Cumhuriyet Mahallesi (Toku\u015Flar K\xF6y\xFC)",
      "postaKodu": "03852",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Dede Mahallesi (K\u0131n\u0131k K\xF6y\xFC)",
      "postaKodu": "03852",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Dibekba\u015F\u0131 Mahallesi (Ahmetpa\u015Fa Beldesi)",
      "postaKodu": "03860",
      "semt": "Ahmetpa\u015Fa"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Elvanpa\u015Fa K\xF6y\xFC",
      "postaKodu": "03852",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Eyice K\xF6y\xFC",
      "postaKodu": "03852",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Fatih Mahallesi",
      "postaKodu": "03850",
      "semt": "Sinanpa\u015Fa"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Fatih Mahallesi (Ak\xF6ren Beldesi)",
      "postaKodu": "03857",
      "semt": "Ak\xF6ren"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Fatih Mahallesi (D\xFCza\u011Fa\xE7 Beldesi)",
      "postaKodu": "03870",
      "semt": "D\xFCza\u011Fa\xE7"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Fatih Mahallesi (K\u0131rka Beldesi)",
      "postaKodu": "03859",
      "semt": "K\u0131rka"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Fatih Mahallesi (K\xFC\xE7\xFCkh\xFCy\xFCk Beldesi)",
      "postaKodu": "03854",
      "semt": "K\xFC\xE7\xFCkh\xFCy\xFCk"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Fatih Mahallesi (T\u0131naztepe Beldesi)",
      "postaKodu": "03110",
      "semt": "T\u0131naztepe"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Fevzi \xC7akmak Mahallesi (K\u0131l\u0131\xE7arslan Beldesi)",
      "postaKodu": "03858",
      "semt": "K\u0131l\u0131\xE7arslan"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Garip\xE7e K\xF6y\xFC",
      "postaKodu": "03852",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Gezler K\xF6y\xFC",
      "postaKodu": "03852",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "G\xF6lc\xFCk Mahallesi (Ahmetpa\u015Fa Beldesi)",
      "postaKodu": "03860",
      "semt": "Ahmetpa\u015Fa"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Halkal\u0131 Mahallesi (Ahmetpa\u015Fa Beldesi)",
      "postaKodu": "03860",
      "semt": "Ahmetpa\u015Fa"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Hisar Mahallesi (Serban Beldesi)",
      "postaKodu": "03855",
      "semt": "Serban"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Hozman Mahallesi (Serban Beldesi)",
      "postaKodu": "03855",
      "semt": "Serban"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "H\xFCrriyet Mahallesi (Nuh K\xF6y\xFC)",
      "postaKodu": "03852",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "H\xFCrriyet Mahallesi (Ta\u015Foluk Beldesi)",
      "postaKodu": "03121",
      "semt": "Ta\u015Foluk"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "\u0130\u011Fdeli K\xF6y\xFC",
      "postaKodu": "03852",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "I\u015F\u0131k Mahallesi (D\xFCza\u011Fa\xE7 Beldesi)",
      "postaKodu": "03870",
      "semt": "D\xFCza\u011Fa\xE7"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "\u0130stiklal Mahallesi (Nuh K\xF6y\xFC)",
      "postaKodu": "03852",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Karaca \xD6ren K\xF6y\xFC",
      "postaKodu": "03852",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Kayadibi K\xF6y\xFC",
      "postaKodu": "03852",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Kocatepe Mahallesi (K\u0131l\u0131\xE7arslan Beldesi)",
      "postaKodu": "03858",
      "semt": "K\u0131l\u0131\xE7arslan"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "K\xF6pr\xFCba\u015F\u0131 Mahallesi (Serban Beldesi)",
      "postaKodu": "03855",
      "semt": "Serban"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "K\xFC\xE7\xFCktepe Mahallesi (Ahmetpa\u015Fa Beldesi)",
      "postaKodu": "03860",
      "semt": "Ahmetpa\u015Fa"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "K\xFCmbet Mahallesi (Serban Beldesi)",
      "postaKodu": "03855",
      "semt": "Serban"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Kurtulu\u015F Mahallesi (K\xFC\xE7\xFCkh\xFCy\xFCk Beldesi)",
      "postaKodu": "03854",
      "semt": "K\xFC\xE7\xFCkh\xFCy\xFCk"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "\xD6\u011Fretmenler Mahallesi",
      "postaKodu": "03850",
      "semt": "Sinanpa\u015Fa"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Orta Mahallesi (G\xFCney Beldesi)",
      "postaKodu": "03880",
      "semt": "G\xFCney"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Orta Mahallesi (Serban Beldesi)",
      "postaKodu": "03855",
      "semt": "Serban"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Saray Mahallesi (T\u0131naztepe Beldesi)",
      "postaKodu": "03110",
      "semt": "T\u0131naztepe"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Sarayc\u0131k K\xF6y\xFC",
      "postaKodu": "03852",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Tazlar K\xF6y\xFC",
      "postaKodu": "03852",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Yavuz Sultan Selim Mahallesi (K\u0131rka Beldesi)",
      "postaKodu": "03859",
      "semt": "K\u0131rka"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Yeni Mahallesi (G\xFCney Beldesi)",
      "postaKodu": "03880",
      "semt": "G\xFCney"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Yeni Mahallesi (Ta\u015Foluk Beldesi)",
      "postaKodu": "03121",
      "semt": "Ta\u015Foluk"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Yeni Mahallesi (T\u0131naztepe Beldesi)",
      "postaKodu": "03110",
      "semt": "T\u0131naztepe"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Y\u0131ld\u0131r\u0131m Beyaz\u0131t Mahallesi (Ak\xF6ren Beldesi)",
      "postaKodu": "03857",
      "semt": "Ak\xF6ren"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Y\u0131ld\u0131r\u0131m Beyaz\u0131t Mahallesi (K\u0131rka Beldesi)",
      "postaKodu": "03859",
      "semt": "K\u0131rka"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Y\u0131ld\u0131r\u0131m Kemal K\xF6y\xFC",
      "postaKodu": "03852",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Yukar\u0131 Mahallesi",
      "postaKodu": "03850",
      "semt": "Sinanpa\u015Fa"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Yukar\u0131 Mahallesi (Ahmetpa\u015Fa Beldesi)",
      "postaKodu": "03860",
      "semt": "Ahmetpa\u015Fa"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Yukar\u0131 Mahallesi (G\xFCney Beldesi)",
      "postaKodu": "03880",
      "semt": "G\xFCney"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Y\xFCr\xFCkmezar\u0131 K\xF6y\xFC",
      "postaKodu": "03852",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Zafer Mahallesi (D\xFCza\u011Fa\xE7 Beldesi)",
      "postaKodu": "03870",
      "semt": "D\xFCza\u011Fa\xE7"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Zafer Mahallesi (K\u0131n\u0131k K\xF6y\xFC)",
      "postaKodu": "03852",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Zafer Mahallesi (K\xFC\xE7\xFCkh\xFCy\xFCk Beldesi)",
      "postaKodu": "03854",
      "semt": "K\xFC\xE7\xFCkh\xFCy\xFCk"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sinanpa\u015Fa",
      "mahalle": "Zafer Mahallesi (T\u0131naztepe Beldesi)",
      "postaKodu": "03110",
      "semt": "T\u0131naztepe"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sultanda\u011F\u0131",
      "mahalle": "Akbaba K\xF6y\xFC",
      "postaKodu": "03911",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sultanda\u011F\u0131",
      "mahalle": "Akp\u0131nar Mahallesi (Ye\u015Fil\xE7iftlik Beldesi)",
      "postaKodu": "03940",
      "semt": "Ye\u015Fil\xE7iftlik"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sultanda\u011F\u0131",
      "mahalle": "A\u015Fa\u011F\u0131 Mahallesi (Ye\u015Fil\xE7iftlik Beldesi)",
      "postaKodu": "03940",
      "semt": "Ye\u015Fil\xE7iftlik"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sultanda\u011F\u0131",
      "mahalle": "Atat\xFCrk Mahallesi (Dere\xE7ine Beldesi)",
      "postaKodu": "03910",
      "semt": "Dere\xE7ine"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sultanda\u011F\u0131",
      "mahalle": "Bah\xE7elievler Mahallesi (K\u0131rca K\xF6y\xFC)",
      "postaKodu": "03911",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sultanda\u011F\u0131",
      "mahalle": "Balaban Mahallesi (\xC7ukurcak K\xF6y\xFC)",
      "postaKodu": "03911",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sultanda\u011F\u0131",
      "mahalle": "\xC7a\u011Flayan Mahallesi (K\u0131rca K\xF6y\xFC)",
      "postaKodu": "03911",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sultanda\u011F\u0131",
      "mahalle": "Camikebir Mahallesi (Dere\xE7ine Beldesi)",
      "postaKodu": "03910",
      "semt": "Dere\xE7ine"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sultanda\u011F\u0131",
      "mahalle": "\xC7am\xF6z\xFC K\xF6y\xFC",
      "postaKodu": "03911",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sultanda\u011F\u0131",
      "mahalle": "\xC7avu\u015F Mahallesi",
      "postaKodu": "03900",
      "semt": "Sultanda\u011F\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sultanda\u011F\u0131",
      "mahalle": "\xC7\u0131narl\u0131 Mahallesi (\xDC\xE7kuyu K\xF6y\xFC)",
      "postaKodu": "03911",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sultanda\u011F\u0131",
      "mahalle": "\xC7ukurcak K\xF6y\xFC",
      "postaKodu": "03911",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sultanda\u011F\u0131",
      "mahalle": "Cumhuriyet Mahallesi (Dere\xE7ine Beldesi)",
      "postaKodu": "03910",
      "semt": "Dere\xE7ine"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sultanda\u011F\u0131",
      "mahalle": "Cumhuriyet Mahallesi (Karap\u0131nar K\xF6y\xFC)",
      "postaKodu": "03911",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sultanda\u011F\u0131",
      "mahalle": "Do\u011Fanc\u0131k K\xF6y\xFC",
      "postaKodu": "03911",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sultanda\u011F\u0131",
      "mahalle": "Hisar Mahallesi (K\u0131rca K\xF6y\xFC)",
      "postaKodu": "03911",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sultanda\u011F\u0131",
      "mahalle": "\u0130mam Aziz Mahallesi (Yakasinek K\xF6y\xFC)",
      "postaKodu": "03911",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sultanda\u011F\u0131",
      "mahalle": "\u0130n\xF6n\xFC Mahallesi (Karap\u0131nar K\xF6y\xFC)",
      "postaKodu": "03911",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sultanda\u011F\u0131",
      "mahalle": "Karaki\u015Fla K\xF6y\xFC",
      "postaKodu": "03911",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sultanda\u011F\u0131",
      "mahalle": "Karaman Mahallesi (Dere\xE7ine Beldesi)",
      "postaKodu": "03910",
      "semt": "Dere\xE7ine"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sultanda\u011F\u0131",
      "mahalle": "Kavakl\u0131 Mahallesi (Dere\xE7ine Beldesi)",
      "postaKodu": "03910",
      "semt": "Dere\xE7ine"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sultanda\u011F\u0131",
      "mahalle": "Kayran Mahallesi",
      "postaKodu": "03900",
      "semt": "Sultanda\u011F\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sultanda\u011F\u0131",
      "mahalle": "Orta Mahallesi (Yakasinek K\xF6y\xFC)",
      "postaKodu": "03911",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sultanda\u011F\u0131",
      "mahalle": "Pazaralti Mahallesi",
      "postaKodu": "03900",
      "semt": "Sultanda\u011F\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sultanda\u011F\u0131",
      "mahalle": "P\u0131narl\u0131 Mahallesi (\xDC\xE7kuyu K\xF6y\xFC)",
      "postaKodu": "03911",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sultanda\u011F\u0131",
      "mahalle": "Sel\xE7uk Mahallesi",
      "postaKodu": "03911",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sultanda\u011F\u0131",
      "mahalle": "Sel\xE7uk Mahallesi (Karap\u0131nar K\xF6y\xFC)",
      "postaKodu": "03911",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sultanda\u011F\u0131",
      "mahalle": "Sira Mahallesi (Ye\u015Fil\xE7iftlik Beldesi)",
      "postaKodu": "03940",
      "semt": "Ye\u015Fil\xE7iftlik"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sultanda\u011F\u0131",
      "mahalle": "Ta\u015Fk\xF6pr\xFC K\xF6y\xFC",
      "postaKodu": "03911",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sultanda\u011F\u0131",
      "mahalle": "Tepeba\u015Fi Mahallesi (Ye\u015Fil\xE7iftlik Beldesi)",
      "postaKodu": "03940",
      "semt": "Ye\u015Fil\xE7iftlik"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sultanda\u011F\u0131",
      "mahalle": "Ulup\u0131nar Mahallesi (Yakasinek K\xF6y\xFC)",
      "postaKodu": "03911",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sultanda\u011F\u0131",
      "mahalle": "Yeni Mahallesi",
      "postaKodu": "03900",
      "semt": "Sultanda\u011F\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sultanda\u011F\u0131",
      "mahalle": "Yeni Mahallesi (Yakasinek K\xF6y\xFC)",
      "postaKodu": "03911",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sultanda\u011F\u0131",
      "mahalle": "Yenikaraba\u011F K\xF6y\xFC",
      "postaKodu": "03911",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sultanda\u011F\u0131",
      "mahalle": "Yenikent Mahallesi (Ye\u015Fil\xE7iftlik Beldesi)",
      "postaKodu": "03940",
      "semt": "Ye\u015Fil\xE7iftlik"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sultanda\u011F\u0131",
      "mahalle": "Ye\u015Filyurt Mahallesi (\xDC\xE7kuyu K\xF6y\xFC)",
      "postaKodu": "03911",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sultanda\u011F\u0131",
      "mahalle": "Y\u0131ld\u0131r\u0131m Mahallesi",
      "postaKodu": "03900",
      "semt": "Sultanda\u011F\u0131"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sultanda\u011F\u0131",
      "mahalle": "Y\u0131ld\u0131z Mahallesi (Ye\u015Fil\xE7iftlik Beldesi)",
      "postaKodu": "03940",
      "semt": "Ye\u015Fil\xE7iftlik"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "Sultanda\u011F\u0131",
      "mahalle": "Yukar\u0131 Mahallesi (Ye\u015Fil\xE7iftlik Beldesi)",
      "postaKodu": "03940",
      "semt": "Ye\u015Fil\xE7iftlik"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "A\u011Fzikara K\xF6y\xFC",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Aharoluk Mahallesi (Ortap\u0131nar K\xF6y\xFC)",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Akkaya Mahallesi (Ko\xE7yata\u011F\u0131 K\xF6y\xFC)",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Akyatak Mahallesi (Ko\xE7yata\u011F\u0131 K\xF6y\xFC)",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Akyuva K\xF6y\xFC",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Alt\u0131g\xF6z Mahallesi",
      "postaKodu": "03800",
      "semt": "\u015Euhut"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Anayurt K\xF6y\xFC",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Arapo\u011Flu Mahallesi (Dadak K\xF6y\xFC)",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Ar\u0131zl\u0131 K\xF6y\xFC",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Atat\xFCrk Mahallesi (Efe K\xF6y\xFC)",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Atat\xFCrk Mahallesi (Kayabelen K\xF6y\xFC)",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Ayd\u0131n K\xF6y\xFC",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Bademli K\xF6y\xFC",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Ball\u0131k Mahallesi (Dadak K\xF6y\xFC)",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Ba\u015F Mahallesi",
      "postaKodu": "03800",
      "semt": "\u015Euhut"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Ba\u015Farap Mahallesi (Ko\xE7yata\u011F\u0131 K\xF6y\xFC)",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Ba\u015F\xF6ren K\xF6y\xFC",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Ba\u015Fyer Mahallesi (Dadak K\xF6y\xFC)",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Bozan K\xF6y\xFC",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "B\xFCr\xE7ek Mahallesi (\xC7ak\u0131r\xF6z\xFC K\xF6y\xFC)",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "\xC7a\u011Flayan Mahallesi (Karaadilli Beldesi)",
      "postaKodu": "03830",
      "semt": "Karaadilli"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "\xC7ak\u0131r\xF6z\xFC K\xF6y\xFC",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "\xC7all\u0131o\u011Flu Mahallesi (Dadak K\xF6y\xFC)",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "\xC7anakp\u0131nar\u0131 Mahallesi (Ko\xE7yata\u011F\u0131 K\xF6y\xFC)",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "\xC7obankaya K\xF6y\xFC",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Cumhuriyet Mahallesi (Karaca\xF6ren K\xF6y\xFC)",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Cumhuriyet Mahallesi (Kayabelen K\xF6y\xFC)",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Dadak K\xF6y\xFC",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Demirbel K\xF6y\xFC",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Develi Mahallesi (Karaadilli Beldesi)",
      "postaKodu": "03830",
      "semt": "Karaadilli"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Dolapderesi Mahallesi (Ko\xE7yata\u011F\u0131 K\xF6y\xFC)",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Efe Sultan Mahallesi (Efe K\xF6y\xFC)",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Erenler Mahallesi (Karaadilli Beldesi)",
      "postaKodu": "03830",
      "semt": "Karaadilli"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Fatih Mahallesi (Atl\u0131hisar K\xF6y\xFC)",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Fatih Mahallesi (Efe K\xF6y\xFC)",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Fatih Mahallesi (Karaca\xF6ren K\xF6y\xFC)",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Gavur\xF6reni Mahallesi (Ko\xE7yata\u011F\u0131 K\xF6y\xFC)",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Gazipa\u015Fa Mahallesi",
      "postaKodu": "03800",
      "semt": "\u015Euhut"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "G\xFCldede Mahallesi (Bal\xE7\u0131khisar K\xF6y\xFC)",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "G\xFCneytepe K\xF6y\xFC",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Hac\u0131 Musa Mahallesi",
      "postaKodu": "03800",
      "semt": "\u015Euhut"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Halla\xE7 K\xF6y\xFC",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Hisar Mahallesi",
      "postaKodu": "03800",
      "semt": "\u015Euhut"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Hisar Mahallesi (Atl\u0131hisar K\xF6y\xFC)",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "H\xFCrriyet Mahallesi (Karaca\xF6ren K\xF6y\xFC)",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "\u0130cikli K\xF6y\xFC",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "\u0130lyasl\u0131 K\xF6y\xFC",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "\u0130plik Mahallesi",
      "postaKodu": "03800",
      "semt": "\u015Euhut"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "\u0130sal\u0131 K\xF6y\xFC",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "\u0130smet \u0130n\xF6n\xFC Mahallesi (Kayabelen K\xF6y\xFC)",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "\u0130stiklal Mahallesi",
      "postaKodu": "03800",
      "semt": "\u015Euhut"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "\u0130stiklal Mahallesi (Bal\xE7\u0131khisar K\xF6y\xFC)",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Karahall\u0131 K\xF6y\xFC",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Karl\u0131k K\xF6y\xFC",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Kavakl\u0131 K\xF6y\xFC",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Kayap\u0131nar Mahallesi (Ortap\u0131nar K\xF6y\xFC)",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "K\u0131l\u0131n\xE7kaya K\xF6y\xFC",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Ko\xE7yata\u011F\u0131 K\xF6y\xFC",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Kulak K\xF6y\xFC",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Kurtulu\u015F Mahallesi",
      "postaKodu": "03800",
      "semt": "\u015Euhut"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Mahmut K\xF6y\xFC",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Mau\u015Fan Mahallesi (Ko\xE7yata\u011F\u0131 K\xF6y\xFC)",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Mehmet Akif Ersoy Mahallesi",
      "postaKodu": "03800",
      "semt": "\u015Euhut"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "\xD6rencik Mahallesi (Ko\xE7yata\u011F\u0131 K\xF6y\xFC)",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Ortap\u0131nar K\xF6y\xFC",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Oyna\u011Fan K\xF6y\xFC",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Pa\u015Fac\u0131k K\xF6y\xFC",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Pazar Mahallesi",
      "postaKodu": "03800",
      "semt": "\u015Euhut"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "\u015Eahbendi Mahallesi (Ortap\u0131nar K\xF6y\xFC)",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Sar\u0131yar Mahallesi (Ko\xE7yata\u011F\u0131 K\xF6y\xFC)",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Sat\u0131lm\u0131\u015F Mahallesi (Ko\xE7yata\u011F\u0131 K\xF6y\xFC)",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Sinirk\xF6y K\xF6y\xFC",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Siyek Mahallesi (Dadak K\xF6y\xFC)",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Suludere Mahallesi (Ko\xE7yata\u011F\u0131 K\xF6y\xFC)",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Ta\u015Fl\u0131ca Mahallesi",
      "postaKodu": "03800",
      "semt": "\u015Euhut"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Ta\u015Foluk Mahallesi (Ko\xE7yata\u011F\u0131 K\xF6y\xFC)",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Tekke K\xF6y\xFC",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Tilkideresi Mahallesi (Ko\xE7yata\u011F\u0131 K\xF6y\xFC)",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Toprakp\u0131nar Mahallesi (Ortap\u0131nar K\xF6y\xFC)",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "\xDC\xE7in Mahallesi (\xC7ak\u0131r\xF6z\xFC K\xF6y\xFC)",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Uzunp\u0131nar K\xF6y\xFC",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Yal\u0131 Mahallesi",
      "postaKodu": "03800",
      "semt": "\u015Euhut"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Yar\u0131\u015Fl\u0131 K\xF6y\xFC",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Yayla Mahallesi (\xC7ak\u0131r\xF6z\xFC K\xF6y\xFC)",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Yeni Mahallesi (Bal\xE7\u0131khisar K\xF6y\xFC)",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Yeni Mahallesi (Efe K\xF6y\xFC)",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Yeni Mahallesi (Karaca\xF6ren K\xF6y\xFC)",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Yeni Mahallesi (Kayabelen K\xF6y\xFC)",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Zafer Mahallesi",
      "postaKodu": "03800",
      "semt": "\u015Euhut"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Zafer Mahallesi (Atl\u0131hisar K\xF6y\xFC)",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Zafer Mahallesi (Bal\xE7\u0131khisar K\xF6y\xFC)",
      "postaKodu": "03810",
      "semt": "Merkezk\xF6yler"
    },
    {
      "il": "Afyonkarahisar",
      "ilce": "\u015Euhut",
      "mahalle": "Zafer Mahallesi (Karaadilli Beldesi)",
      "postaKodu": "03830",
      "semt": "Karaadilli"
    },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "14 Nisan Mahallesi", "postaKodu": "04900", "semt": "Diyadin" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Ak\xE7evre K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Ak\xE7evre K\xF6y\xFC Y\xFCceler Mahallesi", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Akyola\xE7 K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Akyola\xE7 K\xF6y\xFC G\xFCltepe Mahallesi", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Alt\u0131nkilit K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Alt\u0131nkilit K\xF6y\xFC Alt\u0131nkilit Mahallesi", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "A\u015Fa\u011F\u0131akpazar K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "A\u015Fa\u011F\u0131dal\xF6ren K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "A\u015Fa\u011F\u0131karde\u015Fli K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "A\u015Fa\u011F\u0131karde\u015Fli K\xF6y\xFC Yukar\u0131 Karde\u015Fli Mahallesi", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "A\u015Fa\u011F\u0131t\xFCtek K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Atadami K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Atat\xFCrk Mahallesi", "postaKodu": "04900", "semt": "Diyadin" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Atayolu K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Atayolu K\xF6y\xFC Beyazta\u015F Mahallesi", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Bat\u0131beyli K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Bat\u0131beyli K\xF6y\xFC Durak Mahallesi", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Bat\u0131beyli K\xF6y\xFC Tarlaba\u015F\u0131 Mahallesi", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Boyalan K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Boyalan K\xF6y\xFC Zorava Mahallesi", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Budak K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Burgulu K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "B\xFCvetli K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "B\xFCvetli K\xF6y\xFC Be\u015Fevler Mahallesi", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Davut K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Davut K\xF6y\xFC Adakent Mahallesi", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Davut K\xF6y\xFC Kapl\u0131ca Mahallesi", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Dedebulak K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Dedebulak K\xF6y\xFC Ala\xE7ay\u0131r Mahallesi", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Dedebulak K\xF6y\xFC A\u015Fa\u011F\u0131 K\xF6h Mahallesi", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Dedebulak K\xF6y\xFC A\u015Fa\u011F\u0131 U\u011Fur Mahallesi", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Dedebulak K\xF6y\xFC Bu\u011Fdayl\u0131 Mahallesi", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Dedebulak K\xF6y\xFC Kaynakl\u0131 Mahallesi", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Dedebulak K\xF6y\xFC \u015Eahinbey Mahallesi", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Dedebulak K\xF6y\xFC Yukar\u0131 K\xF6h Mahallesi", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Dedebulak K\xF6y\xFC Yukar\u0131 U\u011Fur Mahallesi", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Delihasan K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Dibekli K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Dokuzta\u015F K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Fatih Mahallesi", "postaKodu": "04900", "semt": "Diyadin" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Gedik K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "G\xF6\u011Febakan K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "G\xF6l Mahallesi", "postaKodu": "04900", "semt": "Diyadin" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "G\xF6z\xFCpek K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "G\xFCnbuldu K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "G\xFCnbuldu K\xF6y\xFC \xC7ift\xE7i Mahallesi", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "G\xFCnbuldu K\xF6y\xFC Gulebist Mahallesi", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "G\xFCnbuldu K\xF6y\xFC Tar\u0131m Mahallesi", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Hac\u0131halit K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Heybeliyurt K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Heybeliyurt K\xF6y\xFC Mecburiyet Mahallesi", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "\u0130saa\u011Fa K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "\u0130saa\u011Fa Mahallesi", "postaKodu": "04900", "semt": "Diyadin" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Kapanca K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Karapazar K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Karata\u015F K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Ketenp\u0131nar Mahallesi", "postaKodu": "04900", "semt": "Diyadin" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Koca\xE7oban K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Kotanc\u0131 K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Ku\u015Fburnu K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Ku\u015Fburnu K\xF6y\xFC/Kapl\u0131ca Mahallesi", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Ku\u015Flu K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Mollakara K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Murat Mahallesi", "postaKodu": "04900", "semt": "Diyadin" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Mutlu K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Mutlu K\xF6y\xFC/Apro Mahallesi", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Mutlu K\xF6y\xFC/K\u0131rm\u0131z\u0131 Kom Mahallesi", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "O\u011Fuloba K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "O\u011Fuloba K\xF6y\xFC/Otlubay\u0131r Mahallesi", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Omuzba\u015F\u0131 K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Omuzba\u015F\u0131 K\xF6y\xFC/Yol Mahallesi", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Pirali K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Pirali K\xF6y\xFC/Akb\u0131y\u0131k Mahallesi", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Rahmankulu K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "\u015Eahin\u015Fah K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Satic\u0131lar K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Satic\u0131lar K\xF6y\xFC/Yukar\u0131 Satic\u0131lar Mahallesi", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "\u015Eekerbulak K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "So\u011Fuksu K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "S\xFCrenk\xF6k K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "S\xFCrenk\xF6k K\xF6y\xFC/Ak\xE7ay Mahallesi", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "S\xFCrenk\xF6k K\xF6y\xFC/Kom Mahallesi", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "S\xFCrenk\xF6k K\xF6y\xFC/Teyip Mahallesi", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "S\xFCrmeliko\xE7 K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "S\xFCrmeliko\xE7 K\xF6y\xFC/Abdulkadir \xC7etin Mahallesi", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "S\xFCrmeliko\xE7 K\xF6y\xFC/Ahmet I\u015F\u0131k Mahallesi", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "S\xFCrmeliko\xE7 K\xF6y\xFC/Amere\u015Fk Mahallesi", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "S\xFCrmeliko\xE7 K\xF6y\xFC/Be\u015Fevler Mahallesi", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "S\xFCrmeliko\xE7 K\xF6y\xFC/Has\u0131 Kali Komu Mahallesi", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "S\xFCrmeliko\xE7 K\xF6y\xFC/Kamil I\u015F\u0131k Komu Mahallesi", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "S\xFCrmeliko\xE7 K\xF6y\xFC/Kurt Dere Mahallesi", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Ta\u015Fbasamak K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Ta\u015Fbasamak K\xF6y\xFC/Harabe Mahallesi", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Ta\u015Fkesen K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Ta\u015Fkesen K\xF6y\xFC/Cumhuriyet Mahallesi", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Tazekent K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Toklucak K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Ulukent K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Uysall\u0131 K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Yan\u0131k\xE7ukur K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Yan\u0131k\xE7ukur K\xF6y\xFC/\u0130saselam Mahallesi", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Yan\u0131k\xE7ukur K\xF6y\xFC/Saitbey Mahallesi", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Yeni\xE7ad\u0131r K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Yeni\xE7ad\u0131r K\xF6y\xFC/\u0130brahim Komu Mahallesi", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Yeni\xE7ad\u0131r K\xF6y\xFC/\u0130pek Mahallesi", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Yeni\xE7ad\u0131r K\xF6y\xFC/Seyitler Mahallesi", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Yeni\xE7ad\u0131r K\xF6y\xFC/Yol \xDCst\xFC Mahallesi", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Ye\u015Fildurak K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Ye\u015Fildurak K\xF6y\xFC/Yol Boyu Mahallesi", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Ye\u015Fildurak K\xF6y\xFC/Yukar\u0131 Mahallesi", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Y\u0131ld\u0131r\u0131m K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Y\u0131ld\u0131z K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Yolcup\u0131nar\u0131 K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Y\xF6r\xFCkatl\u0131 K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Yukar\u0131akpazar K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Yukaridal\xF6ren K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Yukar\u0131t\xFCtek K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Yukar\u0131t\xFCtek K\xF6y\xFC/Kezo Mahallesi", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Diyadin", "mahalle": "Yuva K\xF6y\xFC", "postaKodu": "04902", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Abdig\xF6r Mahallesi", "postaKodu": "04400", "semt": "Do\u011Fubeyaz\u0131t" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Ahmedihani Mahallesi", "postaKodu": "04400", "semt": "Do\u011Fubeyaz\u0131t" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Aktarla K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Aktu\u011Flu K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Alintepe K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "A\u015Fa\u011F\u0131tavla K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Atabakan K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Atabakan K\xF6y\xFC/Yenik\xF6y Mahallesi", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Ayranc\u0131 K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Ayranc\u0131 K\xF6y\xFC/Arpal\u0131 Mahallesi", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Bardakl\u0131 K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Bardakl\u0131 K\xF6y\xFC/Bedir Mahallesi", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Bar\u0131nd\u0131 K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Bar\u0131\u015F Mahallesi", "postaKodu": "04400", "semt": "Do\u011Fubeyaz\u0131t" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Ba\u015Fk\xF6y K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Bereket K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Besler K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Bezirhane K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Bezirhane K\xF6y\xFC/Samanl\u0131 Mahallesi", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Binkaya K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "B\xF6l\xFCcek K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Bozkurt K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Bozyayla K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Bulakba\u015F\u0131 K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Bulakba\u015F\u0131 K\xF6y\xFC/Demir K\u0131l\u0131\xE7 Mahallesi", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Bulakba\u015F\u0131 K\xF6y\xFC/Kesme Ta\u015F Mahallesi", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "B\xFCy\xFCk A\u011Fr\u0131 Mahallesi", "postaKodu": "04400", "semt": "Do\u011Fubeyaz\u0131t" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Buyuretti K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "\xC7al\u0131k\xF6y K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "\xC7al\u0131k\xF6y K\xF6y\xFC/Ta\u015Fl\u0131 Mahallesi", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "\xC7al\u0131k\xF6y K\xF6y\xFC/Tepeili Mahallesi", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "\xC7etenli K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "\xC7etenli K\xF6y\xFC/G\xF6k\xE7ebulak Mahallesi", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "\xC7iftep\u0131nar Mahallesi", "postaKodu": "04400", "semt": "Do\u011Fubeyaz\u0131t" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "\xC7iftlik K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "\xC7iftlik K\xF6y\xFC/Cebek\xFCmbet Mahallesi", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "\xC7iftlik K\xF6y\xFC/T\xFCrkmen Mahallesi", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "\xC7\xF6m\xE7eli K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Da\u011Fdelen K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Dalbah\xE7e K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Demirtepe K\xF6y\xFC", "map": '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12297.550535664803!2d44.14007427731395!3d39.59594952978292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4014c9ca08a2a669%3A0xe3820c67898a6e84!2zRGVtaXJ0ZXBlLCAwNDQwMiBEZW1pcnRlcGUvRG_En3ViYXlhesSxdC9BxJ9yxLE!5e0!3m2!1sen!2str!4v1770325114056!5m2!1sen!2str"width="600"height="450"style="border:0;"allowfullscreen=""loading="lazy"referrerpolicy="no-referrer-when-downgrade"></iframe>', "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Dolakl\u0131 K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Dostal\u0131 K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Eskisu K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Esnemez K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Esnemez K\xF6y\xFC/Darik Mahallesi", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "G\xF6k\xE7ekaynak K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "G\xF6ller K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "G\xF6ly\xFCz\xFC K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "G\xF6ly\xFCz\xFC K\xF6y\xFC/Bekira\u011F\u0131l Mahallesi", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "G\xF6ly\xFCz\xFC K\xF6y\xFC/\xC7evirme Mahallesi", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "G\xF6ly\xFCz\xFC K\xF6y\xFC/Elle Mahallesi", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "G\xF6ly\xFCz\xFC K\xF6y\xFC/Mira\u011F\u0131l Mahallesi", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "G\xF6z\xFCkara K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "G\xFCll\xFCce K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "G\xFCltepe K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "G\xFCng\xF6ren K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "G\xFCng\xF6ren K\xF6y\xFC/A\u015Fa\u011F\u0131 G\xFCng\xF6ren Mahallesi", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "G\xFCng\xF6ren K\xF6y\xFC/G\u0131r Mahallesi", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "G\xFCng\xF6ren K\xF6y\xFC/Kalhasan Mahallesi", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "G\xFCng\xF6ren K\xF6y\xFC/Yakac\u0131k Mahallesi", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "G\xFCnyolu K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "G\xFCnyolu K\xF6y\xFC/Altun Tepe Mahallesi", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "G\xFCnyolu K\xF6y\xFC/Duryan Mahallesi", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "G\xFCnyolu K\xF6y\xFC/Kale Mahallesi", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "G\xFCnyolu K\xF6y\xFC/K\xF6r\xFCkk Mahallesi", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "G\xFCrbulak K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Hala\xE7 K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Hasankeyf Mahallesi", "postaKodu": "04400", "semt": "Do\u011Fubeyaz\u0131t" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "H\xFCrriyet Mahallesi", "postaKodu": "04400", "semt": "Do\u011Fubeyaz\u0131t" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "\u0130ncesu K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Ishakpa\u015Fa Mahallesi", "postaKodu": "04400", "semt": "Do\u011Fubeyaz\u0131t" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Kalecik K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Karabulak K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Karaburun K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Karaburun K\xF6y\xFC/Ortaca Mahallesi", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Karaca K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Karakent K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Kara\u015Feyh K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Kara\u015Feyh K\xF6y\xFC/\xD6merbey Mahallesi", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Kara\u015Feyh K\xF6y\xFC/Yolu\u015Ftu Mahallesi", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Kargakonmaz K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Kazan K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "K\u0131z\u0131lkaya K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Ko\xE7k\u0131ran Mahallesi", "postaKodu": "04400", "semt": "Do\u011Fubeyaz\u0131t" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Kucak K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Kutlubulak K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Melik\u015Fah K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Melik\u015Fah K\xF6y\xFC/Yukar\u0131 Melik\u015Fah Mahallesi", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Mescitk\xF6y K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Mescitk\xF6y K\xF6y\xFC/U\u011Frak Mahallesi", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "\xD6rmeli K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "\xD6rmeli K\xF6y\xFC/\xC7ay\u0131r Mahallesi", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "\xD6rmeli K\xF6y\xFC/G\xF6ks\xFCg\xFCzel Mahallesi", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Ortadirek K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Ortadirek K\xF6y\xFC/Aydo\u011Fan Mahallesi", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Ortak\xF6y K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "\xD6rt\xFCl\xFC K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Pullutarla K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Sa\u011Fd\u0131\xE7 K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Sa\u011Fl\u0131ksuyu K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Sa\u011Fl\u0131ksuyu K\xF6y\xFC/K\xFCpl\xFC Mahallesi", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Sa\u011Fl\u0131ksuyu K\xF6y\xFC/Ziyaret Mahallesi", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Sanayi Mahallesi", "postaKodu": "04400", "semt": "Do\u011Fubeyaz\u0131t" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Sarib\u0131y\u0131k K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Sar\u0131\u015Favu\u015F K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Sarig\xFCl Mahallesi", "postaKodu": "04400", "semt": "Do\u011Fubeyaz\u0131t" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Sazoba K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Seslita\u015F K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Seslita\u015F K\xF6y\xFC/Haso Mahallesi", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Seslita\u015F K\xF6y\xFC/Konutlar Mahallesi", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Seslita\u015F K\xF6y\xFC/T\u0131m\u0131r Mahallesi", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Somkaya K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Sube\u015Fi\u011Fi K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Sulu\xE7em K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Tan\u0131ktepe K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Tan\u0131ktepe K\xF6y\xFC/K\xFCn\xFCtepe Mahallesi", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Tan\u0131ktepe K\xF6y\xFC/Kurutepe Mahallesi", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Tel\xE7eker K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Top\xE7atan K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Tutak K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Tutumlu K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "\xDC\xE7g\xF6ze K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "\xDC\xE7g\xF6ze K\xF6y\xFC/A\u011Fa Mahallesi", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "\xDC\xE7murat K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Ulu Yol Mahallesi", "postaKodu": "04400", "semt": "Do\u011Fubeyaz\u0131t" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "\xDCzengili K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "\xDCzengili K\xF6y\xFC/R\u0131zde Mahallesi", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Uzunyaz\u0131 K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Uzunyaz\u0131 K\xF6y\xFC/K\xFC\xE7\xFCk Uzun Yaz\u0131 Mahallesi", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Vatan Mahallesi", "postaKodu": "04400", "semt": "Do\u011Fubeyaz\u0131t" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Ya\u011Fmurd\xFC\u015Fen K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Ya\u011Fmurd\xFC\u015Fen K\xF6y\xFC/Konut Mahallesi", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Ya\u011Fmurd\xFC\u015Fen K\xF6y\xFC/\u015Eevket Mahallesi", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Yal\u0131nsaz K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Yal\u0131nsaz K\xF6y\xFC/Tab Mahallesi", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Yanoba K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Yanoba K\xF6y\xFC/Ak\xE7ukur Mahallesi", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Yayg\u0131nyurt K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Yayg\u0131nyurt K\xF6y\xFC/\xC7atk\u0131ran Mahallesi", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Yayg\u0131nyurt K\xF6y\xFC/Demir Kap\u0131 Mahallesi", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Yayg\u0131nyurt K\xF6y\xFC/G\xFCzel Mahallesi", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Yayg\u0131nyurt K\xF6y\xFC/S\xFCtc\xFC Mahallesi", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Yeni Mahallesi", "postaKodu": "04400", "semt": "Do\u011Fubeyaz\u0131t" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Yeni Harman K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Y\u0131\u011F\u0131n\xE7al K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Yi\u011Fityata\u011F\u0131 K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Y\u0131lanl\u0131 K\xF6y\xFC/A\u015F.K\xFC\xE7\xFCk Y\u0131lanl\u0131 Mahallesi", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Y\u0131lanl\u0131 K\xF6y\xFC/K\xFC\xE7\xFCk Y\u0131lanl\u0131 Mahallesi", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Do\u011Fubeyaz\u0131t", "mahalle": "Yukar\u0131 Tavla K\xF6y\xFC", "postaKodu": "04402", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Abdiko\u0308y K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Akyumak K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Akyumak K\xF6y\xFC/Akyumak Mezras\u0131 Mahallesi", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Alagu\u0308n K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Alku\u015Fak K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Arifbey K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "A\u015Fa\u011F\u0131kopuz K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Aydo\u011Fdu K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Aydo\u011Fdu K\xF6y\xFC/Harebeg\xFCl Mahallesi", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "\xC7atalp\u0131nar K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "\xC7atk\xF6seda\u011F K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "\xC7etinsu K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "\xC7iftep\u0131nar K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Dalk\u0131l\u0131\xE7 K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Dalk\u0131l\u0131\xE7 K\xF6y\xFC/Dalk\u0131l\u0131\xE7 Konutlar Mahallesi", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "De\u011Firmenolu\u011Fu K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Doluta\u015F K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "D\xFCza\u011F\u0131l K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "D\xFCzyayla K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Erg\xF6z\xFC K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Esentepe Mahallesi", "postaKodu": "04600", "semt": "Ele\u015Fkirt" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Fatih Mahallesi", "postaKodu": "04600", "semt": "Ele\u015Fkirt" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Goncali K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Goncali K\xF6y\xFC/Posto Mahallesi", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "G\xF6zayd\u0131n K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "G\xFCneykaya K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "G\xFCvence K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Hasanp\u0131nar\u0131 K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Haydaro\u011Flu K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Hayrang\xF6l K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "H\xFCrriyet K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "H\xFCrriyet Mahallesi", "postaKodu": "04600", "semt": "Ele\u015Fkirt" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "\u0130kizge\xE7e K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "\u0130kizg\xF6l K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "\u0130ndere K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "\u0130stiklal Mahallesi", "postaKodu": "04600", "semt": "Ele\u015Fkirt" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Kanatgeren K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Karabacak K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Kar\u015F\u0131yaka Mahallesi", "postaKodu": "04600", "semt": "Ele\u015Fkirt" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Kayayolu K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Kaz\u0131m Karabekir Mahallesi", "postaKodu": "04600", "semt": "Ele\u015Fkirt" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Kokulup\u0131nar K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "K\xF6rpe\xE7ay\u0131r K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Lozan Mahallesi", "postaKodu": "04600", "semt": "Ele\u015Fkirt" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Mollah\xFCseyin K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Mollas\xFCleyman K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Mollas\xFCleyman K\xF6y\xFC/Al\u0131 Pa\u015Fa Mahallesi", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "M\xFCft\xFCselim Mahallesi", "postaKodu": "04600", "semt": "Ele\u015Fkirt" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "\xD6ztoprak K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Palak\xE7ay\u0131 K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Pirabat K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Ramazan K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Sadakl\u0131 K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Salk\u0131ml\u0131 K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Sar\u0131k\xF6y K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "S\xF6beta\u015F K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Sultanabat K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "S\xFCzge\xE7li K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Tahir Beldesi/Ayd\u0131ntepe Mahallesi", "postaKodu": "04401", "semt": "Tahir" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Tahir Beldesi/Kar\u015F\u0131yaka Mahallesi", "postaKodu": "04401", "semt": "Tahir" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Tahir Beldesi/Ye\u015Fil Mahallesi", "postaKodu": "04401", "semt": "Tahir" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Toprakkale K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "T\xFCrkeli K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Uludal K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Uzunyaz\u0131 K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Ya\u011Fmurlu K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Ya\u011Fmurlu K\xF6y\xFC/Ey\xFCp Komu Mahallesi", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Yan\u0131kdere K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Yaylad\xFCz\xFC Beldesi/A\u015Fa\u011F\u0131 Cihanbey Mahallesi", "postaKodu": "04640", "semt": "Yaylad\xFCz\xFC" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Yaylad\xFCz\xFC Beldesi/Cumhuriyet Mahallesi", "postaKodu": "04640", "semt": "Yaylad\xFCz\xFC" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Yaylad\xFCz\xFC Beldesi/De\u011Firmenge\xE7idi Mahallesi", "postaKodu": "04640", "semt": "Yaylad\xFCz\xFC" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Yaylad\xFCz\xFC Beldesi/G\xF6k\xE7ay\u0131r Mahallesi", "postaKodu": "04640", "semt": "Yaylad\xFCz\xFC" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Yaylad\xFCz\xFC Beldesi/Kar\u015F\u0131yaka Mahallesi", "postaKodu": "04640", "semt": "Yaylad\xFCz\xFC" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Yelkesen K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Ye\u015Filova K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Y\u0131\u011Finta\u015F K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Y\xFCcekap\u0131 Beldesi/Esentepe Mahallesi", "postaKodu": "04630", "semt": "Y\xFCcekap\u0131" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Y\xFCcekap\u0131 Beldesi/Oklaval\u0131 Mahallesi", "postaKodu": "04630", "semt": "Y\xFCcekap\u0131" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Y\xFCcekap\u0131 Beldesi/\u015Eehit Engin Mahallesi", "postaKodu": "04630", "semt": "Y\xFCcekap\u0131" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Y\xFCcekap\u0131 Beldesi/Ye\u015Filyurt Mahallesi", "postaKodu": "04630", "semt": "Y\xFCcekap\u0131" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Yukar\u0131kopuz K\xF6y\xFC", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ele\u015Fkirt", "mahalle": "Yukar\u0131kopuz K\xF6y\xFC/Han Mahallesi", "postaKodu": "04602", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Abdi\xE7\u0131kmaz K\xF6y\xFC", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Abdi\xE7\u0131kmaz K\xF6y\xFC/Ovakent Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Abdi\xE7\u0131kmaz K\xF6y\xFC/Tepecik Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Abdi\xE7\u0131kmaz K\xF6y\xFC/Yukar\u0131 Tepecik Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Ad\u0131mova K\xF6y\xFC", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Akyurt K\xF6y\xFC", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Alakoyun K\xF6y\xFC", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "A\u015Fa\u011F\u0131 Alada\u011F K\xF6y\xFC", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "A\u015Fa\u011F\u0131 Derebibi K\xF6y\xFC", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "A\u015Fa\u011F\u0131 Derebibi K\xF6y\xFC/Kunc\u0131k Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "A\u015Fa\u011F\u0131 Derebibi K\xF6y\xFC/Yukar\u0131 Derebibi Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "A\u015Fa\u011F\u0131 G\xF6zl\xFCce K\xF6y\xFC", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "A\u015Fa\u011F\u0131 Karabal K\xF6y\xFC", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "A\u015Fa\u011F\u0131 Yenig\xFCn K\xF6y\xFC", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "A\u015Fa\u011F\u0131 Yenig\xFCn K\xF6y\xFC/G\xFCve\xE7 Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "A\u015Fa\u011F\u0131 Yenig\xFCn K\xF6y\xFC/Uzun \xC7e\u015Fme Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Ayvac\u0131k K\xF6y\xFC", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Ayvac\u0131k K\xF6y\xFC/Musabey Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Baldere K\xF6y\xFC", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Baldere K\xF6y\xFC/Gome Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Beklemez K\xF6y\xFC", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Beklemez K\xF6y\xFC/Karde\u015Fler Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Buzhane Mahallesi", "postaKodu": "04850", "semt": "Hamur" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "\xC7a\u011Flayan K\xF6y\xFC", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Ceylanl\u0131 K\xF6y\xFC", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Ceylanl\u0131 K\xF6y\xFC/Ortak\xF6y Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Ceylanl\u0131 K\xF6y\xFC/Tatlisu Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Ceylanl\u0131 K\xF6y\xFC/Tazek\xF6y Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Danak\u0131ran K\xF6y\xFC", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Demirkap\u0131 K\xF6y\xFC", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Ekin\xE7ik K\xF6y\xFC", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Ekincik K\xF6y\xFC/Yama\xE7 Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Ekincik K\xF6y\xFC/Yukar\u0131 Ekin\xE7ik Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Erdo\u011Fan K\xF6y\xFC", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Erdo\u011Fan K\xF6y\xFC/\xD6mer\u015Faban Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Esen\xF6ren K\xF6y\xFC", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Esen\xF6ren K\xF6y\xFC/\xC7e\u015Fme Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Esen\xF6ren K\xF6y\xFC/Kayalar Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Esen\xF6ren K\xF6y\xFC/Nenik Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Esen\xF6ren K\xF6y\xFC/Selim Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "G\xFCltepe K\xF6y\xFC", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "G\xFCltepe K\xF6y\xFC/A\u015Fa\u011F\u0131 G\xF6ze Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "G\xFCltepe K\xF6y\xFC/Yo\u011Furt\xE7u Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "G\xFCltepe K\xF6y\xFC/Yukar\u0131 G\xF6ze Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "G\xFCltepe K\xF6y\xFC/Yukar\u0131 Kaya Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "G\xFCm\xFC\u015Fku\u015Fak K\xF6y\xFC", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "G\xFCm\xFC\u015Fku\u015Fak K\xF6y\xFC/Boztepe Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Ka\xE7maz K\xF6y\xFC", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Kale Mahallesi", "postaKodu": "04850", "semt": "Hamur" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Kam\u0131\u015Fl\u0131 K\xF6y\xFC", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Kandilda\u011F\u0131 K\xF6y\xFC", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Karado\u011Fu K\xF6y\xFC", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Karakazan K\xF6y\xFC", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Karakazan K\xF6y\xFC/Ak\xF6ren Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Karakazan K\xF6y\xFC/Bozo \xC7ay\u0131r\u0131 Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Karakazan K\xF6y\xFC/Danac\u0131k Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Karakazan K\xF6y\xFC/\u015Eehit Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Karakazan K\xF6y\xFC/Yaz\u0131l\u0131 Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Karaseyitali K\xF6y\xFC", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Karl\u0131ca K\xF6y\xFC", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Kaynakl\u0131 K\xF6y\xFC", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "K\u0131l\u0131\xE7 K\xF6y\xFC", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "K\u0131l\u0131\xE7 K\xF6y\xFC/Aliaga Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "K\xF6\u015Fk K\xF6y\xFC", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "K\xFCmbet Mahallesi", "postaKodu": "04850", "semt": "Hamur" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Nall\u0131konak K\xF6y\xFC", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Nall\u0131konak K\xF6y\xFC/G\xFCll\xFCce Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "\xD6zdirek K\xF6y\xFC", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "\xD6zdirek K\xF6y\xFC/Alt\u0131n Yurt Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "\xD6zdirek K\xF6y\xFC/Oluklu Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "\xD6zdirek K\xF6y\xFC/\xD6renli Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Saribu\u011Fday K\xF6y\xFC", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Seslidogan K\xF6y\xFC", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Seyithanbey K\xF6y\xFC", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Seyithanbey K\xF6y\xFC/Mezra Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "So\u011Fanl\u0131tepe K\xF6y\xFC", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "S\xFCleymank\xFCmbet K\xF6y\xFC", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "S\xFCleymank\xFCmbet K\xF6y\xFC/A\u015F Koyuncu Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "S\xFCleymank\xFCmbet K\xF6y\xFC/A\u015Fa\u011F\u0131 Yurt Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "S\xFCleymank\xFCmbet K\xF6y\xFC/Han\u0131k Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "S\xFCleymank\xFCmbet K\xF6y\xFC/Karadere Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "S\xFCleymank\xFCmbet K\xF6y\xFC/\xDC\xE7 Evler Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "S\xFCleymank\xFCmbet K\xF6y\xFC/Yk Kuyuncu Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "S\xFCleymank\xFCmbet K\xF6y\xFC/Yk Yurt Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "T\xFCkenmez K\xF6y\xFC", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "U\u011Furta\u015F K\xF6y\xFC", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Yap\u0131l\u0131 K\xF6y\xFC", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Yeni Mahallesi", "postaKodu": "04850", "semt": "Hamur" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Yo\u011Funhisar K\xF6y\xFC", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Yukarialada\u011F K\xF6y\xFC", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Yukarialada\u011F K\xF6y\xFC/Uzun \xC7e\u015Fme Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Yukar\u0131g\xF6zl\xFCce K\xF6y\xFC", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Yukar\u0131g\xF6zl\xFCce K\xF6y\xFC/A\u015Fa\u011F\u0131 Kayalar Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Yukar\u0131yeni G\xFCn K\xF6y\xFC", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Yukar\u0131yeni G\xFCn K\xF6y\xFC/Tutak Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Yukar\u0131yeni G\xFCn K\xF6y\xFC/Ye\u015Fil Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Yuvac\u0131k K\xF6y\xFC", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Yuvac\u0131k K\xF6y\xFC/A\u015Fa\u011F\u0131 Mollahan Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Yuvac\u0131k K\xF6y\xFC/Ayd\u0131nlar Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Yuvac\u0131k K\xF6y\xFC/Bek\xE7iler Mezras\u0131 Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Yuvac\u0131k K\xF6y\xFC/Kele\u015Fkom Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Yuvac\u0131k K\xF6y\xFC/Orta Mollahan Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Yuvac\u0131k K\xF6y\xFC/\u015Eikeft Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Yuvac\u0131k K\xF6y\xFC/Toklu Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Hamur", "mahalle": "Yuvac\u0131k K\xF6y\xFC/Yk Mollahan Mahallesi", "postaKodu": "04852", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "14 Nisan Mahallesi", "postaKodu": "04500", "semt": "Patnos" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Abdulvehap K\xFCfrevi Mahallesi", "postaKodu": "04500", "semt": "Patnos" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Ahmed-i Hani Mahallesi", "postaKodu": "04500", "semt": "Patnos" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Ak\xE7a\xF6ren K\xF6y\xFC", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Ak\xE7a\xF6ren K\xF6y\xFC/Geleb\u0131z\u0131n Mahallesi", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Akdilek K\xF6y\xFC", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Akdilek K\xF6y\xFC/Bah\xE7eli Mahallesi", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Akdilek K\xF6y\xFC/G\xFCld\xFCz Mahallesi", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Akdilek K\xF6y\xFC/\u015Eekerova Mahallesi", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Aktepe K\xF6y\xFC", "postaKodu": "04510", "semt": "Sar\u0131su" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Aktepe K\xF6y\xFC/Maltepe Mahallesi", "postaKodu": "04510", "semt": "Sar\u0131su" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Akyemi\u015F K\xF6y\xFC", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Akyemi\u015F K\xF6y\xFC/Dermo Mahallesi", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Alatay K\xF6y\xFC", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Alatay K\xF6y\xFC/Kale Mahallesi", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Alpaslan Mahallesi", "postaKodu": "04500", "semt": "Patnos" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Anda\xE7l\u0131 K\xF6y\xFC", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Armutlu K\xF6y\xFC", "postaKodu": "04510", "semt": "Sar\u0131su" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Armutlu K\xF6y\xFC/Ye\u015Filce Mahallesi", "postaKodu": "04510", "semt": "Sar\u0131su" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "A\u015Fa\u011F\u0131g\xF6\xE7mez K\xF6y\xFC", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "A\u015Fa\u011F\u0131kam\u0131\u015Fl\u0131 K\xF6y\xFC", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Atat\xFCrk Mahallesi", "postaKodu": "04500", "semt": "Patnos" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Badi\u015Fan Mahallesi", "postaKodu": "04500", "semt": "Patnos" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Ba\u011Fba\u015F\u0131 K\xF6y\xFC", "postaKodu": "04510", "semt": "Sar\u0131su" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Baltac\u0131k K\xF6y\xFC", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Baltac\u0131k K\xF6y\xFC/G\xFCl Mahallesi", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Ba\u015Ftarla K\xF6y\xFC", "postaKodu": "04503", "semt": "Dedeli" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Ba\u015Ftarla K\xF6y\xFC/Dambat Mahallesi", "postaKodu": "04503", "semt": "Dedeli" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Ba\u015Ftarla K\xF6y\xFC/\u015Eeytanova Mahallesi", "postaKodu": "04503", "semt": "Dedeli" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Bozo\u011Flak K\xF6y\xFC", "postaKodu": "04503", "semt": "Dedeli" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Bozo\u011Flak K\xF6y\xFC/Arpac\u0131k Mahallesi", "postaKodu": "04503", "semt": "Dedeli" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Bozo\u011Flak K\xF6y\xFC/Bat\u0131beyli Mahallesi", "postaKodu": "04503", "semt": "Dedeli" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Bozo\u011Flak K\xF6y\xFC/\xC7avu\u015F Mahallesi", "postaKodu": "04503", "semt": "Dedeli" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Bozo\u011Flak K\xF6y\xFC/Fatih Mahallesi", "postaKodu": "04503", "semt": "Dedeli" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Bozo\u011Flak K\xF6y\xFC/Ye\u015Fil\xE7imen Mahallesi", "postaKodu": "04503", "semt": "Dedeli" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Bozo\u011Flak K\xF6y\xFC/Yk. Hirbe Mahallesi", "postaKodu": "04503", "semt": "Dedeli" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Bozo\u011Flak K\xF6y\xFC/Z\xFCbeyt Komu Mahallesi", "postaKodu": "04503", "semt": "Dedeli" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Budak K\xF6y\xFC", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "\xC7ak\u0131rbey K\xF6y\xFC", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "\xC7ak\u0131rbey K\xF6y\xFC/\u015E\u0131r\u0131k Mahallesi", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "\xC7ak\u0131rbey K\xF6y\xFC/Tapu Mahallesi", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Cami Mahallesi", "postaKodu": "04500", "semt": "Patnos" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "\xC7amurlu K\xF6y\xFC", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "\xC7aputlu K\xF6y\xFC", "postaKodu": "04510", "semt": "Sar\u0131su" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "\xC7aputlu K\xF6y\xFC/Yk. Dumanl\u0131 Mahallesi", "postaKodu": "04510", "semt": "Sar\u0131su" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "\xC7atmaoluk K\xF6y\xFC", "postaKodu": "04510", "semt": "Sar\u0131su" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "\xC7avu\u015Fk\xF6y K\xF6y\xFC", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "\xC7avu\u015Fk\xF6y K\xF6y\xFC/Yusuf Mahallesi", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "\xC7ay Mahallesi", "postaKodu": "04500", "semt": "Patnos" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "\xC7i\xE7ek K\xF6y\xFC", "postaKodu": "04510", "semt": "Sar\u0131su" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "\xC7imenli K\xF6y\xFC", "postaKodu": "04503", "semt": "Dedeli" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "\xC7ukurba\u011F K\xF6y\xFC", "postaKodu": "04503", "semt": "Dedeli" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "\xC7ukurba\u011F K\xF6y\xFC/Kele\u015Fler Mezras\u0131 Mahallesi", "postaKodu": "04503", "semt": "Dedeli" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Cumhuriyet Mahallesi", "postaKodu": "04500", "semt": "Patnos" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Da\u011Falan K\xF6y\xFC", "postaKodu": "04510", "semt": "Sar\u0131su" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Dedeli Beldesi/Akbulut Mahallesi", "postaKodu": "04503", "semt": "Dedeli" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Dedeli Beldesi/Budak Mahallesi", "postaKodu": "04503", "semt": "Dedeli" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Dedeli Beldesi/\xC7ayba\u015F\u0131 Mahallesi", "postaKodu": "04503", "semt": "Dedeli" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Dedeli Beldesi/Cumhuriyet Mahallesi", "postaKodu": "04503", "semt": "Dedeli" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Dedeli Beldesi/De\u011Firmen Mahallesi", "postaKodu": "04503", "semt": "Dedeli" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Dedeli Beldesi/Merkez Mahallesi", "postaKodu": "04503", "semt": "Dedeli" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Dedeli Beldesi/\xDCz\xFCml\xFC Mahallesi", "postaKodu": "04503", "semt": "Dedeli" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Dedeli Beldesi/Ye\u015Filova Mahallesi", "postaKodu": "04503", "semt": "Dedeli" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "De\u011Firmend\xFCz\xFC K\xF6y\xFC", "postaKodu": "04503", "semt": "Dedeli" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "De\u011Firmend\xFCz\xFC K\xF6y\xFC/K\u0131z\u0131la\u011F\u0131l Mahallesi", "postaKodu": "04503", "semt": "Dedeli" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Demir\xF6ren K\xF6y\xFC", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Derecik K\xF6y\xFC", "postaKodu": "04503", "semt": "Dedeli" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Derecik K\xF6y\xFC/Zali Mahallesi", "postaKodu": "04503", "semt": "Dedeli" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Dizginkale K\xF6y\xFC", "postaKodu": "04510", "semt": "Sar\u0131su" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Do\u011Fansu K\xF6y\xFC", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "D\xFCzceli K\xF6y\xFC", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Edremit K\xF6y\xFC", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Edremit K\xF6y\xFC/Din\xE7er Mahallesi", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Erge\xE7li K\xF6y\xFC", "postaKodu": "04510", "semt": "Sar\u0131su" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Erge\xE7li K\xF6y\xFC/\xC7ubuklu Mahallesi", "postaKodu": "04510", "semt": "Sar\u0131su" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Erge\xE7li K\xF6y\xFC/Esentepe Mahallesi", "postaKodu": "04510", "semt": "Sar\u0131su" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Erge\xE7li K\xF6y\xFC/Mecnung\xF6l\xFC Mahallesi", "postaKodu": "04510", "semt": "Sar\u0131su" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Erge\xE7li K\xF6y\xFC/Y\u0131lanl\u0131 Mahallesi", "postaKodu": "04510", "semt": "Sar\u0131su" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Erge\xE7li K\xF6y\xFC/Zorava Mahallesi", "postaKodu": "04510", "semt": "Sar\u0131su" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Ery\u0131lmaz K\xF6y\xFC", "postaKodu": "04503", "semt": "Dedeli" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Esenbel K\xF6y\xFC", "postaKodu": "04510", "semt": "Sar\u0131su" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Eskikonak K\xF6y\xFC", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Gen\xE7ali K\xF6y\xFC", "postaKodu": "04510", "semt": "Sar\u0131su" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Gen\xE7ali K\xF6y\xFC/Canik Mahallesi", "postaKodu": "04510", "semt": "Sar\u0131su" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "G\xF6k\xE7eali K\xF6y\xFC", "postaKodu": "04510", "semt": "Sar\u0131su" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "G\xF6k\xE7eali K\xF6y\xFC/G\xF6l Mahallesi", "postaKodu": "04510", "semt": "Sar\u0131su" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "G\xF6k\xE7eali K\xF6y\xFC/Hazne Mahallesi", "postaKodu": "04510", "semt": "Sar\u0131su" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "G\xF6ko\u011Flu K\xF6y\xFC", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "G\xF6nl\xFCa\xE7\u0131k K\xF6y\xFC", "postaKodu": "04510", "semt": "Sar\u0131su" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "G\xF6nl\xFCa\xE7\u0131k K\xF6y\xFC/Karabulak Mahallesi", "postaKodu": "04510", "semt": "Sar\u0131su" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "G\xFCll\xFCce K\xF6y\xFC", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "G\xFCnbeli K\xF6y\xFC", "postaKodu": "04510", "semt": "Sar\u0131su" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "G\xFCnd\xFCz K\xF6y\xFC", "postaKodu": "04503", "semt": "Dedeli" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "G\xFCvercinli K\xF6y\xFC", "postaKodu": "04510", "semt": "Sar\u0131su" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Hac\u0131lar K\xF6y\xFC", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Hac\u0131lar K\xF6y\xFC/Evren Mahallesi", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Hac\u0131lar K\xF6y\xFC/G\xFCl\xE7imen Mahallesi", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Hasandolu K\xF6y\xFC", "postaKodu": "04503", "semt": "Dedeli" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Hasandolu K\xF6y\xFC/\xC7i\xE7ek Mahallesi", "postaKodu": "04503", "semt": "Dedeli" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Hisar K\xF6y\xFC", "postaKodu": "04503", "semt": "Dedeli" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "\u0130n\xF6n\xFC Mahallesi", "postaKodu": "04500", "semt": "Patnos" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Karatoklu K\xF6y\xFC", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Karbasan K\xF6y\xFC", "postaKodu": "04503", "semt": "Dedeli" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Karbasan K\xF6y\xFC/Balc\u0131lar Mahallesi", "postaKodu": "04503", "semt": "Dedeli" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Karbasan K\xF6y\xFC/Derekomu Mahallesi", "postaKodu": "04503", "semt": "Dedeli" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Ka\u015F K\xF6y\xFC", "postaKodu": "04503", "semt": "Dedeli" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Kazanbey K\xF6y\xFC", "postaKodu": "04510", "semt": "Sar\u0131su" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Kazanbey K\xF6y\xFC/\xC7ortali Mahallesi", "postaKodu": "04510", "semt": "Sar\u0131su" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Kazanbey K\xF6y\xFC/Hirbe Mahallesi", "postaKodu": "04510", "semt": "Sar\u0131su" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Ke\xE7elbaba K\xF6y\xFC", "postaKodu": "04510", "semt": "Sar\u0131su" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "K\u0131z\u0131ltepe K\xF6y\xFC", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "K\u0131zkapan K\xF6y\xFC", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Ko\xE7aklar K\xF6y\xFC", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Konakbeyi K\xF6y\xFC", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "K\xF6seler K\xF6y\xFC", "postaKodu": "04510", "semt": "Sar\u0131su" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "K\xF6seler K\xF6y\xFC/Adalet Mahallesi", "postaKodu": "04510", "semt": "Sarisu" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Kucak K\xF6y\xFC", "postaKodu": "04510", "semt": "Sar\u0131su" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "K\xFCrekli K\xF6y\xFC", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Kuruyaka K\xF6y\xFC", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Kuruyaka K\xF6y\xFC/Demirkaya Mahallesi", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Kuruyaka K\xF6y\xFC/Tekik Mahallesi", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Ku\u015Fkaya K\xF6y\xFC", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Meydanda\u011F\u0131 K\xF6y\xFC", "postaKodu": "04503", "semt": "Dedeli" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Mollaibrahim K\xF6y\xFC", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Onba\u015F\u0131lar K\xF6y\xFC", "postaKodu": "04510", "semt": "Sar\u0131su" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "\xD6rendik K\xF6y\xFC", "postaKodu": "04503", "semt": "Dedeli" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Ortadamla K\xF6y\xFC", "postaKodu": "04503", "semt": "Dedeli" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Ortadamla K\xF6y\xFC/Tozbelen Mahallesi", "postaKodu": "04503", "semt": "Dedeli" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Oyac\u0131k K\xF6y\xFC", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "\xD6zdemir K\xF6y\xFC", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Pir\xF6mer K\xF6y\xFC", "postaKodu": "04503", "semt": "Dedeli" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Pir\xF6mer K\xF6y\xFC/C\u0131zv\u0131z Mahallesi", "postaKodu": "04503", "semt": "Dedeli" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Sa\u011Fr\u0131ca K\xF6y\xFC", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Sa\u011Fr\u0131ca K\xF6y\xFC/K\xFCnc\xFCk Mahallesi", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Sanayi Mahallesi", "postaKodu": "04500", "semt": "Patnos" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Sar\u0131dibek K\xF6y\xFC", "postaKodu": "04510", "semt": "Sarisu" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Sarisu Mahallesi", "postaKodu": "04500", "semt": "Patnos" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Selahaddini Eyyubi Mahallesi", "postaKodu": "04500", "semt": "Patnos" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Serhad Mahallesi", "postaKodu": "04500", "semt": "Patnos" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Suluca K\xF6y\xFC", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "S\xFCphan Da\u011F\u0131 Mahallesi", "postaKodu": "04500", "semt": "Patnos" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Susuz K\xF6y\xFC", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Susuz K\xF6y\xFC/Tekmal Mahallesi", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "S\xFCtl\xFC P\u0131nar Mahallesi", "postaKodu": "04500", "semt": "Patnos" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Tanyeli K\xF6y\xFC", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Tanyeli K\xF6y\xFC/D\xFCzce Mahallesi", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Tanyeli K\xF6y\xFC/G\xFCzeldere Mahallesi", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Tanyeli K\xF6y\xFC/Kayadibi Mahallesi", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Tanyeli K\xF6y\xFC/Mezra Mahallesi", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Tanyeli K\xF6y\xFC/Y.Salahana Mahallesi", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Tanyeli K\xF6y\xFC/Yayalar Mahallesi", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Ta\u015Fk\u0131n K\xF6y\xFC", "postaKodu": "04510", "semt": "Sar\u0131su" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Ta\u015Fk\u0131n K\xF6y\xFC/Abdullah Mahallesi", "postaKodu": "04510", "semt": "Sar\u0131su" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Ta\u015Fk\u0131n K\xF6y\xFC/G\xF6l Mahallesi", "postaKodu": "04510", "semt": "Sar\u0131su" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Ta\u015Fk\u0131n K\xF6y\xFC/Harabekent Mahallesi", "postaKodu": "04510", "semt": "Sar\u0131su" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Tepeli K\xF6y\xFC", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Tepe\xF6n\xFC K\xF6y\xFC", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Turgut \xD6zal Mahallesi", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "\xDC\xE7oymak K\xF6y\xFC", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "\xDCr\xFCt K\xF6y\xFC", "postaKodu": "04510", "semt": "Sar\u0131su" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "\xDCr\xFCt K\xF6y\xFC/Ya\u011F\u0131z Mahallesi", "postaKodu": "04510", "semt": "Sar\u0131su" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Usluca K\xF6y\xFC", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Uzunca K\xF6y\xFC", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Uzung\xFCn K\xF6y\xFC", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Uzung\xFCn K\xF6y\xFC/Halife Mahallesi", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Yal\xE7\u0131nkaya K\xF6y\xFC", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Yal\xE7\u0131nkaya K\xF6y\xFC/Cumhuriyet (L\u0130\xC7) Mahallesi", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Yeni Mahallesi", "postaKodu": "04500", "semt": "Patnos" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Ye\u015Fil \xC7imen Mahallesi", "postaKodu": "04500", "semt": "Patnos" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Ye\u015Filhisar K\xF6y\xFC", "postaKodu": "04503", "semt": "Dedeli" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Ye\u015Filyurt K\xF6y\xFC", "postaKodu": "04510", "semt": "Sar\u0131su" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Yukar\u0131damla K\xF6y\xFC", "postaKodu": "04503", "semt": "Dedeli" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Yukar\u0131g\xF6\xE7mez K\xF6y\xFC", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Yukar\u0131g\xF6\xE7mez K\xF6y\xFC/Dibek Mahallesi", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Yukar\u0131g\xF6\xE7mez K\xF6y\xFC/\u0130ncesu Mahallesi", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Yukar\u0131g\xF6\xE7mez K\xF6y\xFC/Yeni\xE7e Mahallesi", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Yukar\u0131g\xF6\xE7mez K\xF6y\xFC/Yukar\u0131mahalle Mahallesi", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Yukar\u0131kam\u0131\u015Fl\u0131 K\xF6y\xFC", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Yukar\u0131k\xFClecik K\xF6y\xFC", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Yukar\u0131k\xFClecik K\xF6y\xFC/Dikilita\u015F Mahallesi", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Yukar\u0131k\xFClecik K\xF6y\xFC/Ge\xE7it Mahallesi", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Yukar\u0131k\xFClecik K\xF6y\xFC/Kan\u0131\u015Feviti Mahallesi", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Yukar\u0131k\xFClecik K\xF6y\xFC/Salahane Mahallesi", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Yukar\u0131k\xFClecik K\xF6y\xFC/Varan Mahallesi", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Y\xFCnc\xFCler K\xF6y\xFC", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Yunusemre Mahallesi", "postaKodu": "04500", "semt": "Patnos" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Y\xFCrekveren K\xF6y\xFC", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Y\xFCrekveren K\xF6y\xFC/Mezra Mahallesi", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Yurt\xF6ven K\xF6y\xFC", "postaKodu": "04510", "semt": "Sar\u0131su" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Zincirkale K\xF6y\xFC", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Zirekli K\xF6y\xFC", "postaKodu": "04510", "semt": "Sar\u0131su" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Zirekli K\xF6y\xFC/Bozo Mahallesi", "postaKodu": "04510", "semt": "Sar\u0131su" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Zirekli K\xF6y\xFC/\xC7evlik Mahallesi", "postaKodu": "04510", "semt": "Sar\u0131su" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Zirekli K\xF6y\xFC/H\u0131rba G\xFClan Mahallesi", "postaKodu": "04510", "semt": "Sar\u0131su" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Zirekli K\xF6y\xFC/Sat\u0131bulaK Mahallesi", "postaKodu": "04510", "semt": "Sar\u0131su" },
    { "il": "A\u011Fr\u0131", "ilce": "Patnos", "mahalle": "Ziyaret K\xF6y\xFC", "postaKodu": "04502", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "15 Temmuz \u015Eehitler Mahallesi", "postaKodu": "04800", "semt": "Ta\u015Fl\u0131\xE7ay" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "Adnan Menderes Mahallesi", "postaKodu": "04800", "semt": "Ta\u015Fl\u0131\xE7ay" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "Alako\xE7lu K\xF6y\xFC", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "Alako\xE7lu K\xF6y\xFC/D\xF6\u015Feme Mahallesi", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "Aras K\xF6y\xFC", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "A\u015Fa\u011F\u0131dumanl\u0131 K\xF6y\xFC", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "A\u015Fa\u011F\u0131d\xFCzmeydan K\xF6y\xFC", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "A\u015Fa\u011F\u0131iesen K\xF6y\xFC", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "A\u015Fa\u011F\u0131toklu K\xF6y\xFC", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "Bal\xE7i\xE7ek K\xF6y\xFC", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "Bay\u0131ralt\u0131 K\xF6y\xFC", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "Bayramyaz\u0131 K\xF6y\xFC", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "Boyuncak K\xF6y\xFC", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "\xC7\xF6\u011F\xFCrl\xFC K\xF6y\xFC", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "\xC7\xF6\u011F\xFCrl\xFC K\xF6y\xFC/\xC7ermik Mahallesi", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "\xC7\xF6kelge K\xF6y\xFC", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "\xC7\xF6kelge K\xF6y\xFC/\xC7\xF6kelge Mahallesi", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "Cumhuriyet Mahallesi", "postaKodu": "04800", "semt": "Ta\u015Fl\u0131\xE7ay" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "Dilekyaz\u0131 K\xF6y\xFC", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "D\xFCzg\xF6ren K\xF6y\xFC", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "Ge\xE7itveren K\xF6y\xFC", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "G\xF6z\xFCcu K\xF6y\xFC", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "G\xF6z\xFCcu K\xF6y\xFC/Satikomu Mahallesi", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "G\xFCndo\u011Fdu K\xF6y\xFC", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "G\xFCneys\xF6\u011F\xFCt K\xF6y\xFC", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "H\xFCrriyet Mahallesi", "postaKodu": "04800", "semt": "Ta\u015Fl\u0131\xE7ay" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "\u0130kiyama\xE7 K\xF6y\xFC", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "Ka\u011Fn\u0131l\u0131 K\xF6y\xFC", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "Ka\u011Fn\u0131l\u0131 K\xF6y\xFC/Ka\u011F\u0131l\u0131 Mahallesi", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "Karag\xF6z K\xF6y\xFC", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "Kumlubucak K\xF6y\xFC", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "Kumlubucak K\xF6y\xFC/Esen Mahallesi", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "Kumlu\xE7a K\xF6y\xFC", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "Kumlu\xE7a K\xF6y\xFC/Yenik\xF6y Mahallesi", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "Samanyolu K\xF6y\xFC", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "Samanyolu K\xF6y\xFC/G\xFCltepe Mahallesi", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "Samanyolu K\xF6y\xFC/\u0130nanl\u0131 Mahallesi", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "Tanr\u0131verdi K\xF6y\xFC", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "Tanriverdi K\xF6y\xFC/K\xFCrekli Mahallesi", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "Tanriverdi K\xF6y\xFC/Yaylac\u0131k Mahallesi", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "Tanyolu K\xF6y\xFC", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "Tanyolu K\xF6y\xFC/Adakent Mahallesi", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "Tanyolu K\xF6y\xFC/Kayal\u0131k Mahallesi", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "Tanyolu K\xF6y\xFC/Yaylac\u0131k Mahallesi", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "Ta\u015Fteker K\xF6y\xFC", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "Ta\u015Fteker K\xF6y\xFC/Kado Mahallesi", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "Yanal Yol K\xF6y\xFC", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "Yankaya K\xF6y\xFC", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "Yard\u0131mc\u0131lar K\xF6y\xFC", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "Yass\u0131kaya K\xF6y\xFC", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "Yeltepe K\xF6y\xFC", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "Yeltepe K\xF6y\xFC/G\xFCm\xFC\u015Fl\xFC Mahallesi", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "Yukar\u0131dumanl\u0131 K\xF6y\xFC", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "Yukar\u0131d\xFCzmeydan K\xF6y\xFC", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "Yukar\u0131d\xFCzmeydan K\xF6y\xFC/Sivrice Mahallesi", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "Yukar\u0131esen K\xF6y\xFC", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "Yukar\u0131ta\u015Fl\u0131\xE7ay K\xF6y\xFC", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Ta\u015Fl\u0131\xE7ay", "mahalle": "Yukar\u0131toklu K\xF6y\xFC", "postaKodu": "04802", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Adakent K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Ahmetabat K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Akyele K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Alacahan K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "A\u015Fa\u011F\u0131karahalit K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "A\u015Fa\u011F\u0131kargal\u0131k K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "A\u015Fa\u011F\u0131k\xF6\u015Fkk\xF6y K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "A\u015Fa\u011F\u0131k\xF6\u015Fkk\xF6y K\xF6y\xFC/G\xFCl\xE7imen Mahallesi", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "A\u015Fa\u011F\u0131k\xFClecik K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "A\u015Fa\u011F\u0131\xF6zdek K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Atabindi K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Atak\xF6y K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Azizler K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Bah\xE7e K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Bah\xE7e K\xF6y\xFC/Kayadibi Mahallesi", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Batm\u0131\u015F K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Bay\u0131nd\u0131r K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Bay\u0131nd\u0131r K\xF6y\xFC/Tepeba\u015F\u0131 Mahallesi", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Beydamarli K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Bintosun K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Bintosun K\xF6y\xFC/Sofukac\u0131l Mahallesi", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Bi\u015Fi K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Bola\u015Fli K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Bola\u015Fli K\xF6y\xFC/Merpezer Mahallesi", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Bozkas K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Bulutp\u0131nar K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Burnubulak K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Cami Mahallesi", "postaKodu": "04700", "semt": "Tutak" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "\xC7eleba\u015F\u0131 K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "\xC7eleba\u015F\u0131 K\xF6y\xFC/Ayd\u0131n Mahallesi", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "\xC7eleba\u015F\u0131 K\xF6y\xFC/G\xFCl\xE7imen Mahallesi", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "\xC7\u0131rp\u0131l\u0131 K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "\xC7obano\u011Fa K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "\xC7ukurkonak K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Da\u011Fl\u0131ca K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Da\u011Fl\u0131ca K\xF6y\xFC/N\xFCsret Mahallesi", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Daldal\u0131k K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Damlakaya K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Day\u0131p\u0131nar\u0131 K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Derek\xF6y K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Dibelek K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Dikb\u0131y\u0131k K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Dikme K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Do\u011Fang\xFCn K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "D\xF6nerta\u015F K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Dorukdibi K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "D\xF6\u015Fkaya K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Ekincek K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Erdal K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Erge\xE7idi K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Esmer K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Ge\xE7imli K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "G\xFCltepe K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "G\xFCne\u015F\xF6ren K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "G\xFCne\u015F\xF6ren K\xF6y\xFC/Topi Mahallesi", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Hac\u0131yusuf K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "\u0130kig\xF6z\xFCm K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "\u0130pekku\u015Fak K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "\u0130pekku\u015Fak K\xF6y\xFC/Yaz\u0131 Ba\u015F\u0131 Mahallesi", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "\u0130saabat K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Karaa\u011Fa\xE7 K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Karaa\u011Fa\xE7 K\xF6y\xFC/Edisler Mahallesi", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Karaa\u011Fa\xE7 K\xF6y\xFC/Hurisam Mahallesi", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Karacan K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Karacan K\xF6y\xFC/Ku\u015Fkaya Mahallesi", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Karahan K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Karakuyu K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Kar\u015F\u0131yaka Mahallesi", "postaKodu": "04700", "semt": "Tutak" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Ka\u015F\xF6n\xFC K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Kesik K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "K\u0131l\u0131\xE7gedi\u011Fi K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "M\u0131zrak K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Mollahasan K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Murat Mahallesi", "postaKodu": "04700", "semt": "Tutak" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Ocakba\u015F\u0131 K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "O\u011Flaksuyu K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "\xD6nd\xFCl K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "\xD6nd\xFCl K\xF6y\xFC/Hac\u0131 Ali Komu Mahallesi", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Ortayama\xE7 K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Otluca K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Ozanp\u0131nar K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Paland\xF6ken K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Paland\xF6ken K\xF6y\xFC/Aksu Mahallesi", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "P\u0131nar Mahallesi", "postaKodu": "04700", "semt": "Tutak" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Sar\u0131\u011F\xF6ze K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Sar\u0131\u011F\xF6ze K\xF6y\xFC/Mollahalit Mahallesi", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "\u015Eekerb\xFClak K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Sincan K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "So\u011Fukp\u0131nar K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "So\u011Fukp\u0131nar K\xF6y\xFC/Ada Mahallesi", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "So\u011Fukp\u0131nar K\xF6y\xFC/H\xFCrriyet Mahallesi", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Sorgu\xE7lu K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Suvar K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Ta\u015Fbuda\u011F\u0131 K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Uzun\xF6z K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Uzun\xF6z K\xF6y\xFC/Al\u0131hirco Mahallesi", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Yay\u0131kla K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Yeni Mahallesi", "postaKodu": "04700", "semt": "Tutak" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Yenikent K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Yenik\xF6y K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Yukar\u0131kara Halit K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Yukar\u0131kargal\u0131k K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Yukar\u0131kargal\u0131k K\xF6y\xFC/Lal Yusuf Mahallesi", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Yukar\u0131kargal\u0131k K\xF6y\xFC/Zozo Mahallesi", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Yukar\u0131k\xF6\u015Fk K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Tutak", "mahalle": "Yukar\u0131\xF6zdek K\xF6y\xFC", "postaKodu": "04702", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "100.Y\u0131l Mahallesi", "postaKodu": "04200", "semt": "Fevzi\xE7akmak" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Abide Mahallesi", "postaKodu": "04100", "semt": "Kaz\u0131mkarabekir" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "A\u011F\u0131lba\u015F\u0131 K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Ahmetbey K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Akbulgur K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Ak\xE7ay K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Alpaslan Mahallesi", "postaKodu": "04200", "semt": "Fevzi\xE7akmak" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Anakaya K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Arakonak K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "A\u015Fa\u011F\u0131a\u011Fadeve K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "A\u015Fa\u011F\u0131dirmeli K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "A\u015Fa\u011F\u0131kent K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "A\u015Fa\u011F\u0131k\xFCpk\u0131ran Mahallesi", "postaKodu": "04100", "semt": "Kaz\u0131mkarabekir" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "A\u015Fa\u011F\u0131pamukta\u015F K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "A\u015Fa\u011F\u0131pamukta\u015F K\xF6y\xFC/Mezra Mahallesi", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "A\u015Fa\u011F\u0131sakl\u0131ca K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "A\u015Fa\u011F\u0131sakl\u0131ca K\xF6y\xFC/Mamik Mahallesi", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "A\u015Fa\u011F\u0131y\xF6ld\xFCz\xFC K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "A\u015Fkale K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Aslangazi K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Bad\u0131ll\u0131 K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Bah\xE7elievler Mahallesi", "postaKodu": "04100", "semt": "Kaz\u0131mkarabekir" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Bal\u0131ksu K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Balkaynak K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Ball\u0131bostan K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Baloluk K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Ba\u015F\xE7avu\u015F K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Ba\u015Fkent K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Be\u015Fbulak K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Be\u015Fiktepe K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Bezirkhane K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "B\xF6l\xFCkba\u015F\u0131 K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Boztoprak K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "\xC7ak\u0131roba K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "\xC7amurlu K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "\xC7atalipa\u015Fa K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "\xC7ay\u0131rk\xF6y K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "\xC7obanbeyi K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "\xC7obanbeyi K\xF6y\xFC/Arap Mahallesi", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "\xC7ukuralan K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "\xC7ukur\xE7ay\u0131r K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Cuma\xE7ay K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Cuma\xE7ay K\xF6y\xFC/Komik Mahallesi", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Cumhuriyet Mahallesi", "postaKodu": "04200", "semt": "Fevzi\xE7akmak" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Dedemaksut K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Do\u011Futepe K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Do\u011Futepe K\xF6y\xFC/Mezra Mahallesi", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "D\xF6nerdere K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Dumanl\u0131 K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "E\u011Fribelen K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Elia\xE7\u0131k K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Esenk\xF6y K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Esenk\xF6y K\xF6y\xFC/Esen K\xF6y Mahallesi", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Eski\u015Farman K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Fatih Mahallesi", "postaKodu": "04100", "semt": "Kaz\u0131mkarabekir" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Fevzi \xC7akmak Mahallesi", "postaKodu": "04200", "semt": "Fevzi\xE7akmak" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "F\u0131rat Mahallesi", "postaKodu": "04200", "semt": "Fevzi\xE7akmak" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Gazi Mahallesi", "postaKodu": "04100", "semt": "Kaz\u0131mkarabekir" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Ge\xE7italan K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "G\xFCm\xFC\u015Fyaz\u0131 K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "G\xFCneysu K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "G\xFCvendik K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "G\xFCvenli K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Hacisefer K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Hanoba K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "H\u0131d\u0131r K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "H\xFCrriyet Mahallesi", "postaKodu": "04100", "semt": "Kaz\u0131mkarabekir" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Kalender K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Karasu K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Kavac\u0131k K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Kavakk\xF6y K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Kayabey K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Kaz\u0131m Karabekir Mahallesi", "postaKodu": "04100", "semt": "Kaz\u0131mkarabekir" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Kazl\u0131 K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Kocata\u015F K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Kocata\u015F K\xF6y\xFC/Alt\u0131n\xE7ay\u0131r Mahallesi", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Ko\xE7ba\u015F\u0131 K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Konuktepe K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Kovanc\u0131k K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Kovanc\u0131k K\xF6y\xFC/A\u015Fa\u011F\u0131suba\u015F\u0131 Mahallesi", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Kovanc\u0131k K\xF6y\xFC/Ayranl\u0131 Mahallesi", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Kovanc\u0131k K\xF6y\xFC/Darica Mahallesi", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Kovanc\u0131k K\xF6y\xFC/G\xF6lsevti Mahallesi", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Kovanc\u0131k K\xF6y\xFC/P\u0131narc\u0131k Mahallesi", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Kovanc\u0131k K\xF6y\xFC/Yay\u0131kl\u0131 Mahallesi", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Kumluge\xE7it K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Kurtulu\u015F Mahallesi", "postaKodu": "04200", "semt": "Fevzi\xE7akmak" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Leylek P\u0131nar Mahallesi", "postaKodu": "04100", "semt": "Kaz\u0131mkarabekir" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Mehmet Akif Ersoy Mahallesi", "postaKodu": "04200", "semt": "Fevzi\xE7akmak" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Mollaali K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Mollaosman K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Mollaosman K\xF6y\xFC/Konak Mahallesi", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Murat K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Murat K\xF6y\xFC/A\u011Fr\u0131 OSB Mahallesi", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Murat K\xF6y\xFC/\xDC\xE7 Evler Mahallesi", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Murat Mahallesi", "postaKodu": "04200", "semt": "Fevzi\xE7akmak" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Murathan K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "O\u011Flakl\u0131 K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "O\u011Flakl\u0131 K\xF6y\xFC/\xC7ay\u0131r Mahallesi", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Ortakent K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Ortayoku\u015F K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Otlubay\u0131r K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Ozanlar K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "\xD6zba\u015F\u0131 K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "\xD6zveren K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Sabuncu K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Sa\u011F\u0131rtas K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Sarica K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Sarica K\xF6y\xFC/Ferhat Mahallesi", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Sarica K\xF6y\xFC/Re\u015Fo Mahallesi", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Sarido\u011Fan K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Sariharman K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Sariharman K\xF6y\xFC/Yukar\u0131 Suba\u015F\u0131 Mahallesi", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Sarita\u015F K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "S\u0131tk\u0131ya Mahallesi", "postaKodu": "04100", "semt": "Kaz\u0131mkarabekir" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "So\u011Fancumac\u0131k K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "So\u011Fank\xF6y K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "S\xF6\u011F\xFCtl\xFC K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Su\xE7ata\u011F\u0131 K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Ta\u015Ftekne K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Tayp\u0131nar K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Tellis\u0131rt K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Tezeren K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "U\xE7arkaya K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Uzunveli K\xF6y\xFC/A\u015Fa\u011F\u0131 P\u0131nar Mahallesi", "map": "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31249.12764100706!2d43.20725055321074!3d39.596409592527266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406c98b9358ec315%3A0x5f732ad545b0ff1c!2zVXp1bnZlbGksIEHFn2HEn8SxIFDEsW5hciwgMDQwMTAgVXp1bnZlbGkvQcSfcsSxIE1lcmtlei9BxJ9yxLE!5e0!3m2!1sen!2str!4v1770842125499!5m2!1sen!2str' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Uzunveli K\xF6y\xFC/Yukar\u0131 P\u0131nar Mahallesi", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Yak\u0131nca K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Yaln\u0131zkonak K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Yavuz Mahallesi", "postaKodu": "04100", "semt": "Kaz\u0131mkarabekir" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Yaylak\xF6y K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Yaz\u0131c\u0131 K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Yaz\u0131l\u0131 K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Y\u0131\u011F\u0131ntepe K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Yolluyaz\u0131 K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Yolu G\xFCzel K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Yoncali K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Su\xE7ata\u011F\u0131 K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Ta\u015Ftekne K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Tayp\u0131nar K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Tellis\u0131rt K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Tezeren K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "U\xE7arkaya K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Yak\u0131nca K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Yaln\u0131zkonak K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Yavuz Mahallesi", "postaKodu": "04100", "semt": "Kaz\u0131mkarabekir" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Yaylak\xF6y K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Yaz\u0131c\u0131 K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Yaz\u0131l\u0131 K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Y\u0131\u011F\u0131ntepe K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Yolluyaz\u0131 K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Yolu G\xFCzel K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Yorguns\xF6\u011F\xFCt K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Yukar\u0131a\u011Fadeve K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Yukar\u0131a\u011Fadeve K\xF6y\xFC/Darbo\u011Faz Mahallesi", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Yukar\u0131a\u011Fadeve K\xF6y\xFC/G\xFCl\xE7imen Mahallesi", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Yukar\u0131dirmeli K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Yukar\u0131k\xFCpk\u0131ran K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Yukar\u0131pamukta\u015F K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Yukar\u0131sakl\u0131ca K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Yukar\u0131yolduzu K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Yurtp\u0131nar K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" },
    { "il": "A\u011Fr\u0131", "ilce": "Merkez", "mahalle": "Ziyaret K\xF6y\xFC", "postaKodu": "04010", "semt": "Merkezk\xF6yler" }
  ];
  return data;
}, {
  maxAge: 60 * 60,
  // 1 hour
  name: "postal-data"
});

export { postalData_get as default };
//# sourceMappingURL=postal-data.get.mjs.map
