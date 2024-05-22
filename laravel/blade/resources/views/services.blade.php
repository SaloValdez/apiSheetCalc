@extends('layouts.landing')

@section('title','SERVICIOS')


@section('content')
    <h1>servicios</h1>
    este es un ppagina de SERVICIOS
    
    @component('_components.card')
        @slot('title','service 1')
        @slot('content','LOMEN IPSUMSSSSSS')
    @endcomponent

    @component('_components.card')
            @slot('title','Service 2')
            @slot('content')
                <strong><p>hooooooo</p></strong>
            @endslot 
    @endcomponent
  
 

@endsection


