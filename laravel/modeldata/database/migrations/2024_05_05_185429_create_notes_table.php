<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('notes', function (Blueprint $table) {
            $table->id();
            $table->string('title',255);
            $table->string('description',255)->nullable(); //este campo puede ser nulo
            $table->date('deadline'); //que tenga un valor  por defecto si no se registra
            // $table->integer('valorEntero');
            // $table->unsigned('enteroPositivo');
            // $table->bigInteger('enterosGrandes');
            // $table->ubsignedNigInteger('enterosGrandesPositivios');
            // $table->text('textosDeMayorDimencion');
            // $table->float('tipos flotante');
            // $table->double('valoresDecimales');
            // $table->boolean('boleanos');
            // $table->enum('nombreCampo',['valor1','valor2','valor3']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('notes');
    }
};
