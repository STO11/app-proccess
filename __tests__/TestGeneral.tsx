/**
 * @format
 */

import 'react-native';
import {LoginController} from '../src/controllers/LoginController';
import {Provider} from '../src/services/provider';
import {OrderBy} from '../src/utils/utils';
//import React from 'react';

it('api request test', async () => {
    let response: any = await Provider.getCases(
        'http://frontendtest.aurum.com.br:3000',
        'aurumtest',
    );
    expect(response.cases[0].id).toBe('1');
});

it('login test', async () => {
    let response = await LoginController.login(
        'candidato_mobile@email.com.br',
        '123456',
        true,
    );
    expect(response).toBe(true);
});

it('Order by data asc list history', async () => {
    const historicals = [
        {
            date: '2017-12-30T03:00:00.000Z',
            description: 'Concluso para despacho 1',
        },
        {
            date: '2017-11-30T03:00:00.000Z',
            description: 'Concluso para despacho 2',
        },
    ];
    let newlist = new OrderBy().sorteDate(historicals, 'increasing');
    expect(newlist[0].description).toBe('Concluso para despacho 2');
});

it('Order by data desc list history', async () => {
    const historicals = [
        {
            date: '2017-12-30T03:00:00.000Z',
            description: 'Concluso para despacho 1',
        },
        {
            date: '2017-11-30T03:00:00.000Z',
            description: 'Concluso para despacho 2',
        },
    ];
    let newlist = new OrderBy().sorteDate(historicals, 'decreasing');
    expect(newlist[0].description).toBe('Concluso para despacho 1');
});

it('Order by description asc list history', async () => {
    const historicals = [
        {
            date: '2017-11-30T03:00:00.000Z',
            description: 'C',
        },
        {
            date: '2017-12-30T03:00:00.000Z',
            description: 'A',
        },
        {
            date: '2017-11-30T03:00:00.000Z',
            description: 'B',
        },
    ];
    let newlist = new OrderBy().sorteDescription(historicals, 'increasing');
    expect(newlist[0].description).toBe('A');
});

it('Order by description desc list history', async () => {
    const historicals = [
        {
            date: '2017-11-30T03:00:00.000Z',
            description: 'C',
        },
        {
            date: '2017-12-30T03:00:00.000Z',
            description: 'A',
        },
        {
            date: '2017-11-30T03:00:00.000Z',
            description: 'B',
        },
    ];
    let newlist = new OrderBy().sorteDescription(historicals, 'decreasing');
    expect(newlist[0].description).toBe('C');
});
